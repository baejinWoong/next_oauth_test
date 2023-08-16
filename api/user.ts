import axiosInstance from './http'

export const duplicateCheckNickname = async (data: any) => {
  return await axiosInstance({
    url: '/service/nick',
    method: 'post',
    data,
  })
}

export const sendVerifyEmail = async (data: any) => {
  return await axiosInstance({
    url: '/service/email',
    method: 'post',
    data,
  })
}

export const checkVerifyCode = async (data: any) => {
  return await axiosInstance({
    url: '/service/email/check',
    method: 'post',
    data,
  })
}

export const snsSignUp = async (data: any) => {
  return await axiosInstance({
    url: '/service/signUp',
    method: 'post',
    data,
  })
}

export const snsSignIn = async (data: any) => {
  return await axiosInstance({
    url: '/service/login',
    method: 'post',
    data,
  })
}
