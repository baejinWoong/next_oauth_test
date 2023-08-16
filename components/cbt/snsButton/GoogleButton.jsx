import React, { useEffect } from 'react'
import { snsSignIn, snsSignUp } from '../../../api/user'

const GoogleButton = ({ disabled, userInfo, isSignIn }) => {
  const googleLoginHandler = async () => {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_APP_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=openid&response_type=code`
    window.open(googleAuthUrl, 'facebook', 'width=600, height=600, top=100, left=100')
  }

  const signUp = (token) => {
    snsSignUp({
      accessToken: token,
      authNumber: userInfo.emailCode,
      email: userInfo.email,
      name: userInfo.name,
      nickName: userInfo.nickname,
      provider: 'GOOGLE',
    }).then((response) => {
      if (response.data.status.code === 'E20002') {
        window.sessionStorage.setItem('authorization', response.headers.authorization)
        console.log('성공!')
      } else if (response.data.status.code === 'E40004') alert('이미 가입된 회원 입니다')
    })
  }

  const signIn = (token) => {
    snsSignIn({
      accessToken: token,
      provider: 'GOOGLE',
    }).then((response) => {
      if (response.data.status.code === 'E20002') {
        window.sessionStorage.setItem('authorization', response.headers.authorization)
        console.log('성공!')
      }
    })
  }

  useEffect(() => {
    window.googleTokenHandler = (token) => {
      if (isSignIn) signIn(token)
      else signUp(token)
    }
    return () => {
      window.googleTokenHandler = null
    }
  }, [userInfo])

  return (
    <button type="button" className={`button googleButton ${disabled ? 'disabled' : ''}`} onClick={disabled ? null : googleLoginHandler}>
      <span className="ico">
        <img src="../static/images/ico/ico_google.png" alt="google" className="activeImage" />
        <img src="../static/images/ico/ico_google_black.png" alt="google" className="disabledImage" />
      </span>
      <span className="text">Google로 시작하기</span>
    </button>
  )
}

export default GoogleButton
