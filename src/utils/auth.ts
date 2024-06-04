import Cookies from 'js-cookie'

const token='token';


export const getToken=()=>{
    return Cookies.get(token);
}

export const setToken=(value:string)=>{
    return Cookies.set(token,value);
}

export const removeToken=()=>{
    return Cookies.remove(token);
}