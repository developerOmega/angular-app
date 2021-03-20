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

  async submitSession() {
    
    if(this.user.email == "") {
      return;
    }
    
    if(this.user.password == "") {
      return;
    }
    
    const body = {
      email: this.user.email,
      password: this.user.password
    }

    try {
      const data = await this.Req.post('/v1/login' ,body ,false);
      if(data.ok) {
        Cookie.setCookie('token', data.token);
        Cookie.setCookie('session', JSON.stringify(data.user));
        window.location.replace('/user/articles');
      }
    } catch (error) {
      console.error(error);
    }

  }

}
