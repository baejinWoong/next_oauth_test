import React, { useState, useEffect } from 'react'
import { ICO_CLOSE_03, ICO_FACEBOOK_02, ICO_TWITTER, ICO_YOUTUBE } from '../../../static/images'

const Navigation = ({ showNavigation, showNavigationHandler, showSignUpModalHandler }) => {
  const [selectedMenu, setSelectedMenu] = useState('visual')
  const clickScrollMoveHandler = (event) => {
    const targetId = event.target.id
    setSelectedMenu(targetId)
    document.querySelector(`.${targetId}Container`).scrollIntoView({ behavior: 'smooth' })
    showNavigationHandler()
  }

  const clickMobileSingUp = () => {
    showNavigationHandler()
    showSignUpModalHandler()
  }
  const scrollEvent = () => {
    const scrollTop = window.scrollY // Scroll Top
    const visualHeight = document.querySelector('.visualContainer').offsetHeight
    const elliSpaceHeight = document.querySelector('.elliSpaceContainer').offsetHeight
    const presentHeight = document.querySelector('.presentContainer').offsetHeight
    const applyHeight = document.querySelector('.applyContainer').offsetHeight

    if (scrollTop <= visualHeight * 0.7) setSelectedMenu('visual')
    else if (scrollTop > visualHeight * 0.7 && scrollTop <= visualHeight + elliSpaceHeight * 0.8) setSelectedMenu('elliSpace')
    else if (scrollTop > visualHeight + elliSpaceHeight * 0.8 && scrollTop <= visualHeight + elliSpaceHeight + presentHeight * 0.7) setSelectedMenu('present')
    else if (
      scrollTop > visualHeight + elliSpaceHeight + presentHeight * 0.7 &&
      scrollTop <= visualHeight + elliSpaceHeight + presentHeight + applyHeight * 0.2
    )
      setSelectedMenu('apply')
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent)

    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  return (
    <div className={`navigationArea ${showNavigation ? 'open' : 'close'}`}>
      <div className="navigation">
        <ul className="mainLink">
          <li className={`${selectedMenu === 'visual' ? 'active' : ''}`}>
            <span onClick={clickScrollMoveHandler} id="visual">
              Home
            </span>
          </li>
          <li className={`${selectedMenu === 'elliSpace' ? 'active' : ''}`}>
            <span onClick={clickScrollMoveHandler} id="elliSpace">
              ElliSPACE 소개
            </span>
          </li>
          <li className={`${selectedMenu === 'present' ? 'active' : ''}`}>
            <span onClick={clickScrollMoveHandler} id="present">
              참여 선물
            </span>
          </li>
          {/* <li className={`${selectedMenu === 'apply' ? 'active' : ''}`}>
            <span onClick={clickScrollMoveHandler} id="apply" className="pc">
              지금 바로 신청하기
            </span>
            <span onClick={clickMobileSingUp} id="apply" className="mobile">
              지금 바로 신청하기
            </span>
          </li> */}
          <li className={`${selectedMenu === 'event' ? 'active' : ''}`}>
            <span onClick={clickScrollMoveHandler} id="event">
              Event
            </span>
          </li>
          <li className={`${selectedMenu === 'myPage' ? 'active' : ''}`}>
            <span onClick={clickScrollMoveHandler} id="myPage">
              마이페이지
            </span>
          </li>
        </ul>
        <div className="bottomNavigation">
          <h3>Follow us</h3>
          <ul className="snsMenu">
            <li>
              <a href="https://twitter.com/?lang=ko" target="_blank" rel="noopener noreferrer">
                <img src="/static/images/ico/ico_twitter.png" alt="TWITTER" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="/static/images/ico/ico_facebook_02.png" alt="FACEBOOK" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src="/static/images/ico/ico_youtube.png" alt="YOUTUBE" />
              </a>
            </li>
          </ul>
        </div>

        <button type="button" className="closeButton" onClick={showNavigationHandler}>
          <img src="/static/images/ico/ico_close_03.png" alt="navigation close" />
        </button>
      </div>
      <span className="dim" onClick={showNavigationHandler}></span>
    </div>
  )
}
export default Navigation
