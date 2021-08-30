import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  player_char = [
    {
      name: 'State',
      description:"state description"
    },
    {
      name:'Scripts',
      description:'scripts description'
    },
    {
      name:'Animations',
      description:'animations description'
    },
    {
      name:'User Interface',
      description:'UserInterface description'
    },
    {
      name:'Audio',
      description:'AUdio description'
    }
  ];

  prototyping = [];
  production = [];
  polishing = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
