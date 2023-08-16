import React from 'react'
import KakaoButton from '../snsButton/KakaoButton'
import NaverButton from '../snsButton/NaverButton'
import GoogleButton from '../snsButton/GoogleButton'
import AppleButton from '../snsButton/AppleButton'
import FacebookButton from '../snsButton/FacebookButton'

const SignInModal = ({ showModalHandler }) => {
  return (
    <div className="modal modalType01 open">
      <div className="modalArea">
        <div className="contents">
          <div className="loginWrap">
            <h2>로그인</h2>
            {/*<span className="errorMessage">로그인에 실패했습니다</span>*/}
            <p>테스터 신청 시 연동한 소셜계정으로 로그인하세요</p>
            <div className="body buttonBox">
              <KakaoButton isSignIn />
              <NaverButton isSignIn />
              <GoogleButton isSignIn />
              <AppleButton isSignIn />
              <FacebookButton isSignIn />
            </div>
          </div>
        </div>
        <button type="button" className="closeButton" onClick={showModalHandler}>
          <img src="../static/images/ico/ico_close_01.png" alt="close button" />
        </button>
      </div>
      <span className="dim" onClick={showModalHandler}></span>
    </div>
  )
}

export default SignInModal
