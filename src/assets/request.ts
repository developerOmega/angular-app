import Cookie from '../assets/cookies';

export default class Request {
  url: string = "";
  token: string = "";
  constructor() {
    this.url = 'http://localhost:3000';
    this.token = Cookie.getCookie('token') 
  }

  public async get( route:string = "" ) {
    const url = this.url + route;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  public async post( route:string = "", body:object, isSession = true ){
    const url = this.url + route;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': isSession ? this.token : ""
      }

    });
    const data = await response.json();

    return data;
  }

  public async put(route:string = "", body:object) {
    const url = this.url + route;
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    });
    const data = await response.json();

    return data;
  }

  public async delete(route:string = "") {
    const url = this.url + route;
    const response = await fetch(url, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    });
    const data = await response.json();

    return data;
  }
}