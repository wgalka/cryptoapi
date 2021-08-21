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

  loadCoinsTable() {
    this.loadCoinsTableFlag = !this.loadCoinsTableFlag;
    this.xs = {id: "d", name: "r32", symbol: "321"};
  }
}
