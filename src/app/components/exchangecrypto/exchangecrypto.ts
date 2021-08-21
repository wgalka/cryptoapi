import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ClientService} from "../../services/client.service";

export interface cryptoCoin {
  name: string;
  symbol: string;
}

@Component({
  selector: 'app-currencyform',
  templateUrl: './exchangecrypto.html',
  styleUrls: ['./exchangecrypto.css']
})
export class Exchangecrypto implements OnInit {
  cryptoList: cryptoCoin[] = [
    {name: "Bitcoin (BTC)", symbol: "BTC"},
    {name: "Chia (XCH)", symbol: "XCH"},
    {name: "Ethereum (ETH)", symbol: "ETH"},
    {name: "Dogecoin (DOGE)", symbol: "DOGE"},
    {name: "GateToken (GT)", symbol: "GT"}
  ];

  currencyList: cryptoCoin[] = [
    {name: "European Euro (EUR)", symbol: "EUR"},
    {name: "U.S. Dollar (USD)", symbol: "USD"},
    {name: "Japanese Yen (JPY)", symbol: "JPY"},
    {name: "British Pound (GBP)", symbol: "GBP"},
    {name: "Swiss Franc (CHF)", symbol: "CHF"},
    {name: "Polish Złoty (PLN)", symbol: "PLN"}
  ]
  selectedCryptoCurrency: cryptoCoin = {name: "", symbol: "   "};
  selectedCurrency: cryptoCoin = {name: "", symbol: "   "};
  selectFormControl = new FormControl('', Validators.required);
  userCashVale: number;
  currentPrice: number;

  constructor(private _formBuilder: FormBuilder, private clientService: ClientService) {
  }

  ngOnInit(): void {
  }

  onCalculate(value: string) {
    if (this.selectedCurrency == undefined || this.selectedCryptoCurrency == undefined ||
      value == undefined
    ) {
    } else {
      this.clientService.getPrice(this.selectedCryptoCurrency.symbol).subscribe(data => {
        this.currentPrice = data[this.selectedCurrency.symbol];
        this.userCashVale = this.currentPrice * <number><unknown>value;
      });
    }
  }
}

