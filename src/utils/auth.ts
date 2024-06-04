import Cookies from 'js-cookie'

const token='';


export const getToken=(name:string)=>{
    return Cookies.get(name);
}

export const setToken=(name:string,value:string)=>{
    return Cookies.set(name,value);
}

export const removeToken=(name:string)=>{
    return Cookies.remove(name);
}