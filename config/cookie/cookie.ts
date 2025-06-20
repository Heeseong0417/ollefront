import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name: string, value: any, options:any) => {
  return cookies.set(name, value, {...options})
}

export const getCookie = (name: string) => {
  return cookies.get(name)
}

export const removeCookie = (name: string) => {
  return cookies.remove(name);
}
export const tokenheaders=(token:any)=>{
  return {'Content-Type': 'application/json',"authorization":"Bearer " +token}
}