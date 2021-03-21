import Cookie from '../assets/cookies';

export default class Request {
  // Propiedad de url
  url: string = "";

  // Propiedad del token jwt
  token: string = "";

  constructor() {
    this.url = 'http://localhost:3000';
    this.token = Cookie.getCookie('token') 
  }

  // Método que hace una petición get para buscar una colección
  // Recibir parámetros -> route:string (Ruta de la petición)
  public async get( route:string = "" ) {
    // Url para para crear petición
    const url = this.url + route;
    
    // Hacer petición
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  // Método que hace una petición post para agregar columna a una colección
  // Recibir parámetros -> route:string (Ruta de la petición), body:object (Datos de la columna), isSession:boolean (Es necesario el token jwt)
  public async post( route:string = "", body:object, isSession = true ){
    // Url para para crear petición
    const url = this.url + route;

    // Configuración de petición
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': isSession ? this.token : ""
      }
    });
    // Hacer petición
    const data = await response.json();

    return data;
  }

  // Método que hace una petición put para editar la columna de una colección
  // Recibir parámetros -> route:string (Ruta de la petición), body:object (Datos de la columna)
  public async put(route:string = "", body:object) {
    // Url para para crear petición
    const url = this.url + route;

    // Configuración de petición
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    });

    // Hacer petición
    const data = await response.json();

    return data;
  }

  // Método que hace una petición delete para eliminar la columna de una colección
  // Recibir parámetros -> route:string (Ruta de la petición), body:object (Datos de la columna)
  public async delete(route:string = "") {
    // Url para para crear petición
    const url = this.url + route;

    // Configuración de petición
    const response = await fetch(url, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    });

    // Hacer petición
    const data = await response.json();

    return data;
  }
}