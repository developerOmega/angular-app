export default class Cookie {
 
  static setCookie(cname:string, cvalue:string){
    document.cookie = `${cname} = ${cvalue};`;
  }

  static getCookie(cname:string):string {
    const decodedCookie = decodeURIComponent(document.cookie);  
    const cookies = decodedCookie.split(';');
  
    const data = cookies.filter( cookie => {
      const cooArr = cookie.split("=");
      return cooArr[0] == cname;
    });
  
    if(data[0]) {
      return data[0].split("=")[1];
    }
  
    return "";
  }

  static getCookieJSON(cname:string):Object {
    const data = Cookie.getCookie(cname);
    return JSON.parse(data);
  }

  static deleteCookie(cname:string) {
    const decodedCookie = decodeURIComponent(document.cookie);  
    const cookies = decodedCookie.split(';');
  
    let data = cookies.map( cookie => {
      const cooArr = cookie.split("=");
      return cooArr[0] == cname ? `${cname}=` : cookie;
    });
    
    let newCookie = data.join(';');
    
    console.log(newCookie);
    console.log(document.cookie);
    
    document.cookie = newCookie ;
  
  }

}