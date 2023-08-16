import Head from 'next/head'
import React, { useEffect } from 'react'
import { snsSignIn, snsSignUp } from '../../../api/user'
import { ICO_APPLE, ICO_APPLE_BLACK } from '../../../static/images'

const AppleButton = ({ disabled, color, userInfo, isSignIn }) => {
  const appleLoginButtonClickTriggerHandler = () => document.getElementById('appleid-signin').click()

  const signUp = (data) => {
    snsSignUp({
      accessToken: data.detail.authorization.id_token,
      authNumber: userInfo.emailCode,
      email: userInfo.email,
      name: userInfo.name,
      nickName: userInfo.nickname,
      provider: 'APPLE',
    }).then((response) => {
      if (response.data.status.code === 'E20002') {
        window.sessionStorage.setItem('authorization', response.headers.authorization)
        console.log('성공!')
      } else if (response.data.status.code === 'E40004') alert('이미 가입된 회원 입니다')
    })
  }

  const signIn = (data) => {
    snsSignIn({
      accessToken: data.detail.authorization.id_token,
      provider: 'APPLE',
    }).then((response) => {
      if (response.data.status.code === 'E20002') {
        window.sessionStorage.setItem('authorization', response.headers.authorization)
        console.log('성공!')
      }
    })
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  useEffect(() => {
    const loginAppleAfterHandler = (data) => {
      if (isSignIn) signIn(data)
      else signUp(data)
    }

    document.addEventListener('AppleIDSignInOnSuccess', loginAppleAfterHandler)
    // 애플로 로그인 실패 시.
    document.addEventListener('AppleIDSignInOnFailure', (error) => {
      console.log('AppleIDSignInOnFailure' + error)
    })
    return () => {
      document.removeEventListener('AppleIDSignInOnSuccess', loginAppleAfterHandler)
    }
  }, [userInfo])

  return (
    <button
      type="button"
      className={`button appleButton ${disabled ? 'disabled' : ''} ${color ? 'white' : ''}`}
      onClick={disabled ? null : appleLoginButtonClickTriggerHandler}
    >
      <div style={{ width: 0, height: 0, overflow: 'hidden' }}>
        <div id="appleid-signin" data-color="black" data-border="true" data-type="sign in" />
      </div>
      <span className="ico">
        {color ? (
          <>
            <img src="../static/images/ico/ico_apple_black.png" alt="apple" className="activeImage" />
            <img src="../static/images/ico/ico_apple_black.png" alt="apple" className="disabledImage" />
          </>
        ) : (
          <>
            <img src="../static/images/ico/ico_apple.png" alt="apple" className="activeImage" />
            <img src="../static/images/ico/ico_apple_black.png" alt="apple" className="disabledImage" />
          </>
        )}
      </span>
      <span className="text">Apple로 시작하기</span>
      <Head>
        <meta name="appleid-signin-client-id" content="com.elspace.services" />
        <meta name="appleid-signin-scope" content="name email" />
        <meta name="appleid-signin-redirect-uri" content="https://dev.ellispace.com/cbt/appleResult" />
        <meta name="appleid-signin-state" content="33232323123" />
        <meta name="appleid-signin-use-popup" content="true" />
      </Head>
    </button>
  )
}

export default AppleButton
