import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-play';
  name = 'Tim';
  authenticated = false;

  constructor(private http: HttpClient) {

  }

}

