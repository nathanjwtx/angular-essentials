import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  // not needed due to service
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
      }
    );
  }

  // not needed
  // onSideAssigned(charInfo) {
  //   this.sideAssigned.emit(charInfo);
  // }

}
