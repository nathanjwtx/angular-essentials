import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @Input makes it bindable/setable from the outside
  @Input() items = [];
  newValue = '';
  // create the EventEmitter to assign an event listener to the button event and Output to listen/set from the outside
  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onButtonClick(event) {
    this.itemAdded.emit(this.newValue);
  }
}
