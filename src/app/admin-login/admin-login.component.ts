import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import Request from '../../assets/request'; 
import Cookie from '../../assets/cookies';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  Req: Request = new Request;
  user: User = new User;
  constructor() { }

  ngOnInit(): void {
  }

  // Método para mandar mandar petición de login
  async submitSession() {
    
    // Si el email no existe, retornar función vacía
    if(this.user.email == "") {
      return;
    }
    
    // Si el password no existe, retornar función vacía
    if(this.user.password == "") {
      return;
    }
    
    // Crear objeto con email y password
    const body = {
      email: this.user.email,
      password: this.user.password
    }

    try {
      //  Crear petición post para crear sesión
      const data = await this.Req.post('/v1/login' ,body ,false);
      
      // Si la petición fue exitosa, definir token y sesión como cookies
      if(data.ok) {
        Cookie.setCookie('token', data.token);
        Cookie.setCookie('session', JSON.stringify(data.user));

        // Redireccionar a ruta de administración
        window.location.replace('/user/articles');
      }
    } catch (error) {
      console.error(error);
    }

  }

}
