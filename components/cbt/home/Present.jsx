import React from 'react'

const Present = ({ showSignUpModalHandler }) => {
  return (
    <div className="presentContainer">
      <div className="inner">
        <h2 className="title01">첫 시작을 함께한 당신을 위한 선물</h2>
        <p className="subText">
          <span>ElliSPACE</span>가 모든 세상에 밝혀지는 날!
          <br />
          다양하고 풍성한 선물을 받을 수 있어요
        </p>
        <ul className="giftWrap">
          <li>
            <img src="../static/images/image/img_present_01.png" alt="선물 이미지" />
          </li>
          <li>
            <img src="../static/images/image/img_present_02.png" alt="선물 이미지" />
          </li>
        </ul>
        <button type="button" className="applyBtn mobile" onClick={showSignUpModalHandler}>
          <img src="../static/images/button/btn_apply_01.png" alt="지금 바로 신청하기" className="pc" />
          <img src="../static/images/button/btn_apply_02.png" alt="지금 바로 신청하기" className="mobile" />
        </button>
      </div>
      {/* <button type="button" className="scrollMove pc"> */}
      {/* <span>Scroll</span> */}
      {/* <i> */}
      {/* <img src={ICO_ARROW_01} alt="아래로 이동" /> */}
      {/*  </i> */}
      {/* </button> */}
    </div>
  )
}

export default Present
