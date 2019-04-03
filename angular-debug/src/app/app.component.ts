import { Component } from '@angular/core';
/* in order to use the line below, types must be imported using npm install --save @types/lodash
then random can be used as shown below */
import { random } from 'lodash';

/* below is used when using traditional javascript importing, e.g. import 'lodash';
then this.number = _.random(1, 10); */
// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  number = 0;

  onIncrease() {
    // this.number = this.number * 2;
    this.number = random(1, 10);
  }
}
