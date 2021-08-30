import {Component} from '@angular/core';
import {Coin} from "./services/client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptoapi';
  loadCoinsTableFlag: boolean;
  xs: Coin;
  mobileQuery: MediaQueryList;
  chart: any = {
    title: 'Chart',
    type: 'CandlestickChart',
    data: [
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50],
      ['Fri', 68, 66, 22, 15]
      // Treat first row as data as well.
    ]
  };

  loadCoinsTable() {
    this.loadCoinsTableFlag = !this.loadCoinsTableFlag;
    this.xs = {id: "d", name: "r32", symbol: "321"};
  }
}
