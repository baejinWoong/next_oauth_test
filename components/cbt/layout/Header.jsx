import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import SignInModal from '../modal/SignInModal'
import Link from 'next/link'

const Header = ({ showSignUpModalHandler }) => {
  const [showNavigation, setShowNavigation] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)

  const showModalHandler = () => setShowSignInModal((prevState) => !prevState)
  const showNavigationHandler = () => setShowNavigation((prevState) => !prevState)

  // 스크롤 감지
  useEffect(() => {
    window.addEventListener('scroll', headerScroll)
    return () => {
      window.removeEventListener('scroll', headerScroll)
    }
  }, [])

  const headerScroll = () => {
    if (window.scrollY < 100) {
      document.querySelector('header').classList.remove('scroll')
    }
    if (window.scrollY >= 100) {
      document.querySelector('header').classList.add('scroll')
    }
  }

  return (
    <header className="bgBlock">
      <div className="inner2">
        <h1>
          <Link href="/">
            <img src="/static/images/common/logo_01.png" alt="ElliSPACE" />
          </Link>
        </h1>
        <div className="rightBox">
          <button type="button" className="nickNameButton">
            닉네임
          </button>
          <button type="button" onClick={showModalHandler}>
            로그인
          </button>
          {/* <button type="button">로그아웃</button> */}
        </div>
        <button type="button" onClick={showNavigationHandler} className="leftMenu">
          <img src="/static/images/ico/ico_menu_01.png" alt="menu button" />
        </button>
        <Navigation showNavigation={showNavigation} showNavigationHandler={showNavigationHandler} showSignUpModalHandler={showSignUpModalHandler} />
      </div>
      {showSignInModal && <SignInModal showModalHandler={showModalHandler} />}
    </header>
  )
}

export default Header
