import { Component } from '@angular/core';
import Cookie from '../assets/cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'b-tec';

  existToken():Boolean {
    return Cookie.getCookie('token') != "" ? true : false;
  }

  deleteSession() {
    Cookie.deleteCookie('token');
    Cookie.deleteCookie('session');
    window.location.replace('/');
  }
}
