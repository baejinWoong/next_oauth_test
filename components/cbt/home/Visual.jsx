import React from 'react'

const Visual = ({ showSignUpModalHandler }) => {
  const clickScrollMoveHandler = () => document.querySelector(`.applyContainer`).scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="visualContainer">
      <div className="videoBox">
        <video autoPlay loop={true} muted>
          <source src="../../../static/video/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="inner3">
        <div className="textWrap">
          <h2>
            {/* 또 하나의 다른 세상!
            <br />
            <span>ElliSPACE</span> 에 여러분을 초대합니다 */}
            또 하나의 다른 세상!
            <br />
            <span>ElliSPACE</span> 의 첫 시작을 함께 해주셔서 감사합니다
          </h2>
          <p>ElliSPACE의 첫 시작을 함께하면 특별한 보상까지!</p>
          <button type="button" className="applyButton pc" onClick={clickScrollMoveHandler}>
            <img src="../static/images/button/btn_apply_01.png" alt="지금 바로 신청하기" className="pc" />
            <img src="../static/images/button/btn_apply_02.png" alt="지금 바로 신청하기" className="mobile" />
          </button>
          <button type="button" className="applyButton mobile" onClick={showSignUpModalHandler}>
            <img src="../static/images/button/btn_apply_01.png" alt="지금 바로 신청하기" className="pc" />
            <img src="../static/images/button/btn_apply_02.png" alt="지금 바로 신청하기" className="mobile" />
          </button>
        </div>
        <button type="button" className="scrollMove">
          <span>Scroll</span>
          <i>
            <img src="../static/images/ico/ico_arrow_01.png" alt="아래로 이동" />
          </i>
        </button>
      </div>
    </div>
  )
}

export default Visual
