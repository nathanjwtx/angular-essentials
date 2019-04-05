import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit() {
  }

  setChosenSide(chosenSide) {
    // this works but isn't best practice
    // this.character.side = chosenSide;
    this.sideAssigned.emit({name: this.character.name, side: chosenSide});
  }
}
