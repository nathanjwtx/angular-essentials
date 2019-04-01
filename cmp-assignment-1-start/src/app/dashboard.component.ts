import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    // template:`
    // <p>Hello {{ name }}! This is my new dashboard component!
    // <p>Current status of dashboard is: {{ loadState }}
    // <div>
    //     <button (click)="onSwitchState()">Switch state</button>
    // </div>
    // <div>
    //     <input type="text" [(ngModel)]="loadState">
    // </div>`
})

export class DashboardComponent {
    name = 'Nathan';
    loadState = 'loading';

    onSwitchState() {
        this.loadState = 'Finished!';
    }
}
