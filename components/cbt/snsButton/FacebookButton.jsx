import React, { useEffect } from 'react'
import { snsSignIn, snsSignUp } from '../../../api/user'

const FacebookButton = ({ disabled, userInfo, isSignIn }) => {
  const facebookLoginHandler = async () => {
    const facebookAuthUrl = `https://www.facebook.com/v4.0/dialog/oauth?client_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URI}&response_type=code&scope=public_profile,email`
    window.open(facebookAuthUrl, 'facebook', 'width=600, height=600, top=100, left=100')
  }

  const signUp = (token) => {
    snsSignUp({
      accessToken: token,
      authNumber: userInfo.emailCode,
      email: userInfo.email,
      name: userInfo.name,
      nickName: userInfo.nickname,
      provider: 'FACEBOOK',
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
      provider: 'FACEBOOK',
    }).then((response) => {
      if (response.data.status.code === 'E20002') {
        window.sessionStorage.setItem('authorization', response.headers.authorization)
        console.log('성공!')
      }
    })
  }

  useEffect(() => {
    window.facebookTokenHandler = (token) => {
      if (isSignIn) signIn(token)
      else signUp(token)
    }
    return () => {
      window.facebookTokenHandler = null
    }
  }, [userInfo])

  return (
    <button type="button" className={`button facebookButton ${disabled ? 'disabled' : ''}`} onClick={disabled ? null : facebookLoginHandler}>
      <span className="ico">
        <img src="../static/images/ico/ico_facebook_01.png" alt="facebook" className="activeImage" />
        <img src="../static/images/ico/ico_facebook_black.png" className="disabledImage" />
      </span>
      <span className="text">Facebook으로 시작하기</span>
    </button>
  )
}

export default FacebookButton
