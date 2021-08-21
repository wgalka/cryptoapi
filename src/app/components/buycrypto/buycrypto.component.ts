import {Component, OnInit} from '@angular/core';
import {cryptoCoin} from "../exchangecrypto/exchangecrypto";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-buycrypto',
  templateUrl: './buycrypto.component.html',
  styleUrls: ['./buycrypto.component.css']
})
export class BuycryptoComponent implements OnInit {
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

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
  }

}
