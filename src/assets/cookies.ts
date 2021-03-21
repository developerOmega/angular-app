export default class Cookie {
 
  // Método que agrega una una nueva cookie
  // Recibir parámetros -> cmane:string, cvalue:string
  static setCookie(cname:string, cvalue:string){
    document.cookie = `${cname} = ${cvalue};`;
  }

  // Método que busca una cookie
  // Recibir parámetros -> cmane:string
  static getCookie(cname:string):string {
    // Definir una constante que almacena las cookies
    const decodedCookie = decodeURIComponent(document.cookie);
    // Separar las cookies por ;
    const cookies = decodedCookie.split(';');
  
    // Filtrar la cooke que sea igual al parámetro cname
    const data = cookies.filter( cookie => {
      const cooArr = cookie.split("=");
      return cooArr[0] == cname;
    });
  
    // Si existe un cookie, retornar valor de cookie
    if(data[0]) {
      return data[0].split("=")[1];
    }
  
    return "";
  }

  // Método que busca una cookie de tipo json
  // Recibir parámetros -> cmane:string
  static getCookieJSON(cname:string):Object {
    const data = Cookie.getCookie(cname);
    return JSON.parse(data);
  }

  // Método que busca una cookie
  // Recibir parámetros -> cmane:string
  static deleteCookie(cname:string) {
    // Definir una constante que almacena las cookies
    const decodedCookie = decodeURIComponent(document.cookie);
    // Separar las cookies por ;
    const cookies = decodedCookie.split(';');
    
     // Eliminar el valor de la cookie que sea igual al parámetro cname
    let data = cookies.map( cookie => {
      const cooArr = cookie.split("=");
      return cooArr[0] == cname ? `${cname}=` : cookie;
    });
    
    // Unir las cookies por ;
    let newCookie = data.join(';');
    
    document.cookie = newCookie ;

  }

}