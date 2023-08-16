import React from 'react'

const Event = () => {
  return (
    <div className="eventContainer">
      <div className="inner">
        <h2 className="title01">Event</h2>
        <p className="subText">
          <span>ElliSPACE</span> 첫 시작을 함께한 여러분의 소중한 의견을 남겨주세요
          <br />
          의견을 남겨주시는 분들께는 소정의 상품을 드립니다
        </p>
        <div className="present">
          <img src="../static/images/image/img_event_present_01.png" alt="" className="pc" />
          <img src="../static/images/image/img_event_present_02.png" alt="" className="mobile" />
        </div>
        <button type="button">
          <img src="../static/images/button/btn_join_01.png" alt="참여하기" className="pc" />
          <img src="../static/images/button/btn_join_02.png" alt="참여하기" className="mobile" />
        </button>
      </div>
    </div>
  )
}

export default Event
