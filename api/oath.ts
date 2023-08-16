import http from './oathHttp'

export const kakaoGetTockenTest = async (data: string | null) => {
  const url = 'https://kauth.kakao.com/oauth/token'
  const params = new URLSearchParams()
  params.append('grant_type', 'authorization_code')
  params.append('client_id', process.env.NEXT_PUBLIC_KAKAO_APP_KEY != null ? process.env.NEXT_PUBLIC_KAKAO_APP_KEY : '')
  params.append('redirect_uri', process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI != null ? process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI : '')
  params.append('code', data != null ? data : '')

  return await http.post(url, params)
}

export const googleGetTockenTest = async (data: string | null) => {
  const url = 'https://www.googleapis.com/oauth2/v4/token'
  const params = new URLSearchParams()
  params.append('grant_type', 'authorization_code')
  params.append('client_id', process.env.NEXT_PUBLIC_GOOGLE_APP_KEY != null ? process.env.NEXT_PUBLIC_GOOGLE_APP_KEY : '')
  params.append('client_secret', process.env.NEXT_PUBLIC_GOOGLE_APP_PASSWORD != null ? process.env.NEXT_PUBLIC_GOOGLE_APP_PASSWORD : '')
  params.append('redirect_uri', process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI != null ? process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI : '')
  params.append('code', data != null ? data : '')

  return await http.post(url, params)
}

export const facebookGetTockenTest = async (data: string | null) => {
  const url = 'https://graph.facebook.com/oauth/access_token'
  const params = new URLSearchParams()
  // params.append("grant_type", "authorization_code");
  params.append('client_id', process.env.NEXT_PUBLIC_FACEBOOK_APP_KEY != null ? process.env.NEXT_PUBLIC_FACEBOOK_APP_KEY : '')
  params.append('client_secret', process.env.NEXT_PUBLIC_FACEBOOK_APP_PASSWORD != null ? process.env.NEXT_PUBLIC_FACEBOOK_APP_PASSWORD : '')
  params.append('redirect_uri', process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URI != null ? process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URI : '')
  params.append('code', data != null ? data : '')

  return await http.post(url, params)
}

export const naverGetTokenTest = async (data: string | null) => {
  const url = '/oauth'
  const query = {
    params: {
      code: data != null ? data : '',
      state: '123123',
      provide: 'naver',
    },
  }
  return await http.get(url, query)
}

export const testOpenApiGetTockenTest = async (data: string | null) => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const params = new URLSearchParams()
  // params.append("grant_type", "authorization_code");
  params.append('title', 'foo')
  params.append('body', 'bar')
  params.append('userId', '1')

  return await http.post(url, params)
}
