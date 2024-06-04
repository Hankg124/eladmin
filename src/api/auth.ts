import http from '@/utils/httpRequest'
import type { CodeType, LoginParamsType, MenuType } from './authType'

// 获取验证码
export const loginCodeApi = () => {
  return http.get<CodeType>('/auth/code')
}

//登录

export const loginApi=(params:LoginParamsType)=>{
  return http.post('/auth/login',params); 
}

// 获取用户信息
export const getUserInfoApi = () => {
  return http.get<any>('/auth/info')
}

//获取用户菜单
export const getUserMenuApi = () => {
  return http.get<MenuType>('/api/menus/build')
}