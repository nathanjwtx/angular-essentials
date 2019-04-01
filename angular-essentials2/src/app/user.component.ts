import { Component, Input } from '@angular/core';

/* alternative property binding syntax value="{{ name }}"
<input type="text" (input)="onUserInput($event)" [value]="name">
*/

@Component({
  selector: 'app-user',
  template: `
  <input type="text" [(ngModel)]="name">
  <p>Hello! {{ name }}</p>
  <p>I'm the user component</p>`
})

export class UserComponent {
  @Input() name = 'Nathan';
  onUserInput(event) {
    this.name = event.target.value;
  }
}
