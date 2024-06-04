import http from '@/utils/httpRequest'

export const loginCodeApi = () => {
  return http.get('/auth/code')
}
