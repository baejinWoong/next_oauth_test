import React, { useEffect } from 'react'
import { snsSignIn, snsSignUp } from '../../../api/user'

const NaverButton = ({ disabled, userInfo, isSignIn }) => {
  const naverLoginHandler = async () => {
    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.NEXT_PUBLIC_NAVER_APP_KEY}&response_type=code&redirect_uri=${
      process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI
    }&state=${'123123'}`
    window.open(naverAuthUrl, 'kakao', 'width=600, height=600, top=100, left=100')
  }

  const signUp = (token) => {
    snsSignUp({
      accessToken: token,
      authNumber: userInfo.emailCode,
      email: userInfo.email,
      name: userInfo.name,
      nickName: userInfo.nickname,
      provider: 'NAVER',
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
      provider: 'NAVER',
    }).then((response) => {
      if (response.data.status.code === 'E20002') {
        window.sessionStorage.setItem('authorization', response.headers.authorization)
        console.log('성공!')
      }
    })
  }

  useEffect(() => {
    window.naverTokenHandler = (token) => {
      if (isSignIn) signIn(token)
      else signUp(token)
    }
    return () => {
      window.naverTokenHandler = null
    }
  }, [userInfo])

  return (
    <button type="button" className={`button naverButton ${disabled ? 'disabled' : ''}`} onClick={disabled ? null : naverLoginHandler}>
      <span className="ico">
        <img src="../static/images/ico/ico_naver.png" alt="naver" className="activeImage" />
        <img src="../static/images/ico/ico_naver_black.png" alt="naver" className="disabledImage" />
      </span>
      <span className="text">Naver로 시작하기</span>
    </button>
  )
}

export default NaverButton
