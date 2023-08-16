import React, { useEffect } from 'react'
import { snsSignUp, snsSignIn } from '../../../api/user'

const KakaoButton = ({ disabled, userInfo, isSignIn }) => {
  const kakaoLoginHandler = async () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`
    window.open(kakaoAuthUrl, 'kakao', 'width=600, height=600, top=100, left=100')
  }

  const signUp = (token) => {
    snsSignUp({
      accessToken: token,
      authNumber: userInfo.emailCode,
      email: userInfo.email,
      name: userInfo.name,
      nickName: userInfo.nickname,
      provider: 'KAKAO',
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
      provider: 'KAKAO',
    }).then((response) => {
      if (response.data.status.code === 'E20002') {
        window.sessionStorage.setItem('authorization', response.headers.authorization)
        console.log('성공!')
      }
    })
  }

  useEffect(() => {
    window.kakaoTokenHandler = (token) => {
      if (isSignIn) signIn(token)
      else signUp(token)
    }
    return () => {
      window.kakaoTokenHandler = null
    }
  }, [userInfo])

  return (
    <button type="button" className={`button kakaoButton ${disabled ? 'disabled' : ''}`} onClick={disabled ? null : kakaoLoginHandler}>
      <span className="ico">
        <img src="../static/images/ico/ico_kakao.png" alt="kakao" className="activeImage" />
        <img src="../static/images/ico/ico_kakak_black.png" alt="kakao" className="disabledImage" />
      </span>
      <span className="text">KaKao로 시작하기</span>
    </button>
  )
}

export default KakaoButton
