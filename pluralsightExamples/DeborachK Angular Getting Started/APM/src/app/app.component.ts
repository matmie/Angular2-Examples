import { Component } from '@angular/core';

@Component({
  	selector: 'pm-root',
  	templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent {
  	pageTitle: string = 'Acme Product Management';
}
