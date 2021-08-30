import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {
  }

  public getCurrency(): Observable<Coin[]> {
    return this.httpClient.get<Coin[]>("https://api.coingecko.com/api/v3/coins/list");
  }

  public getPrice(cryptocurrency: string): Observable<Prices> {
    return this.httpClient.get<Prices>("https://min-api.cryptocompare.com/data/price?fsym=" + cryptocurrency + "&tsyms=USD,JPY,PLN,EUR,GBP,CHF")
  }

  public getChartData(cryptocurrency: string, currency: string): Observable<any> {
    return this.httpClient.get("https://api.coingecko.com/api/v3/coins/" + cryptocurrency + "/ohlc?vs_currency=" + currency + "&days=1")
  }
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
}

export interface Prices {
  USD: number;
  JPY: number;
  PLN: number;
  EUR: number;
  GBP: number;
  CHF: number;
}

export interface ChartData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
}
