import {Component, OnInit} from '@angular/core';
import {ClientService, Coin} from "../../services/client.service";

@Component({
  selector: 'app-coinstable',
  templateUrl: './coinstable.component.html',
  styleUrls: ['./coinstable.component.css']
})
export class CoinstableComponent implements OnInit {
  coins: Coin[];
  displayedColumns: string[] = ['demo-id', 'demo-name', 'demo-symbol'];
  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getCurrency().subscribe(data => {
      this.coins = data;
    })
  }

}
