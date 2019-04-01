import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template:`
    <p>Hello {{ name }}! This is my new dashboard component!
    <p>Current status of dashboard is: {{ loadState }}`
})

export class DashboardComponent {
    name = 'Nathan';
    loadState = 'loading';
}
