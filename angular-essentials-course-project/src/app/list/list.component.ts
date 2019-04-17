import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  characters = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = ' all';
  subscription: Subscription;
  // not needed due to service
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.swService.fetchCharacters();
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    // listen to the event
    this.subscription = this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    );
  }

  // custom subscriptions must be destroyed. Angular takes care of its own automatically
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // not needed
  // onSideAssigned(charInfo) {
  //   this.sideAssigned.emit(charInfo);
  // }

}
