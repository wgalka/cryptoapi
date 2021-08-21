import {Component, OnInit} from '@angular/core';
import {ClientService, Coin} from "../../services/client.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-api',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  messageforuser: string | undefined;
  coins: Coin[];
  formControl = new FormControl('', Validators.required);
  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getCurrency().subscribe(data => {
    this.coins = data;
    })
  }

  sayHello(value: string) {
    this.messageforuser = 'Hello ' + value+'!';
  }
}
