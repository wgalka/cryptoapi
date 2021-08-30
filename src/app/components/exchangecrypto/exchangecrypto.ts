import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ClientService} from "../../services/client.service";

export interface cryptoCoin {
  name: string;
  symbol: string;
  id: string;
}

@Component({
  selector: 'app-currencyform',
  templateUrl: './exchangecrypto.html',
  styleUrls: ['./exchangecrypto.css']
})
export class Exchangecrypto implements OnInit {
  cryptoList: cryptoCoin[] = [
    {name: "Bitcoin (BTC)", symbol: "BTC", id: 'bitcoin'},
    {name: "Chia (XCH)", symbol: "XCH", id: 'chia'},
    {name: "Ethereum (ETH)", symbol: "ETH", id: 'ethereum'},
    {name: "Dogecoin (DOGE)", symbol: "DOGE", id: 'dogecoin'},
    {name: "GateToken (GT)", symbol: "GT", id: 'gatechain-token'}
  ];

  currencyList: cryptoCoin[] = [
    {name: "European Euro (EUR)", symbol: "EUR", id: 'eur'},
    {name: "U.S. Dollar (USD)", symbol: "USD", id: 'usd'},
    {name: "Japanese Yen (JPY)", symbol: "JPY", id: 'jpy'},
    {name: "British Pound (GBP)", symbol: "GBP", id: 'gbp'},
    {name: "Swiss Franc (CHF)", symbol: "CHF", id: 'chf'},
    {name: "Polish Złoty (PLN)", symbol: "PLN", id: 'pln'}
  ]
  selectedCryptoCurrency: cryptoCoin = {name: "", symbol: "", id: ""};
  selectedCurrency: cryptoCoin = {name: "", symbol: "", id: ""};
  selectFormControl = new FormControl('', Validators.required);
  userCashVale: number;
  currentPrice: number;
  responseData: any;

  chart: any = {
    title: 'BTC - USD 24h',
    type: 'CandlestickChart',
    data: [],
    options: {legend: 'none'}
  }
  displayChart: boolean = false;
  errormessage: any;
  inProgress: boolean = false;
  inProgress2: boolean = false;

  constructor(private _formBuilder: FormBuilder, private clientService: ClientService) {
  }

  ngOnInit(): void {
  }

  onCalculate(value: string) {
    this.errormessage = "";
    if (this.selectedCurrency == undefined || this.selectedCryptoCurrency == undefined ||
      value == undefined
    ) {
      this.errormessage = "Please select something!";
    } else {
      this.clientService.getPrice(this.selectedCryptoCurrency.symbol).subscribe(data => {
        this.inProgress = true;
        this.currentPrice = data[this.selectedCurrency.symbol];
        this.userCashVale = this.currentPrice * <number><unknown>value;
      }, error => {
        this.errormessage = "Too many requests";
        this.inProgress = false;
      }, () => {
        this.inProgress = false;
        this.clientService.getChartData(this.selectedCryptoCurrency.id, this.selectedCurrency.id).subscribe(data => {
          this.inProgress2 = true;
          for (var i = 0; i < data.length; i++) {
            data[i][0] = new Date(data[i][0])
          }
          this.responseData = data;
          this.chart.data = data;
        }, error => {
          this.inProgress2 = false;
          this.errormessage = "Too many requests";
        }, () => {
          this.inProgress2 = false;
          this.chart.title = this.selectedCryptoCurrency.symbol + " - " + this.selectedCurrency.symbol + " 24h"
          this.displayChart = true
        })
      });
    }
  }
}

