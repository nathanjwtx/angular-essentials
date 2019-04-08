import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  // not needed as we are injecting the data via the service
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  setChosenSide(chosenSide) {
    // this works but isn't best practice
    // this.character.side = chosenSide;

    // this.sideAssigned.emit({name: this.character.name, side: chosenSide});

    this.swService.onSideChosen({name: this.character.name, side: chosenSide});
  }
}
