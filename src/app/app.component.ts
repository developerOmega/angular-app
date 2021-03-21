import { Component } from '@angular/core';
import Cookie from '../assets/cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'btec-app';

  // Método que verifica la existencia del token en cookies
  existToken():Boolean {
    return Cookie.getCookie('token') != "" ? true : false;
  }

  // Método que elimina la sesión/cookies
  deleteSession() {
    Cookie.deleteCookie('token');
    Cookie.deleteCookie('session');
    // Redireccionar a la ruta main
    window.location.replace('/');
  }
}
