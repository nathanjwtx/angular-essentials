import { Component, Input, Output, EventEmitter } from '@angular/core';

/* alternative property binding syntax value="{{ name }}"
<input type="text" (input)="onUserInput($event)" [value]="name">
*/

@Component({
  selector: 'app-user',
  template: `
  <input type="text" (input)="onUserInput($event)" [value]="name">
  <!--input type="text" [(ngModel)]="name"> -->
  <p>Hello! {{ name }}</p>
  <p>I'm the user component</p>
  <app-user-detail></app-user-detail>
  `
})

export class UserComponent {
  // property
  @Input() name;
  // event binding
  @Output() nameChanged = new EventEmitter<string>();
  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
