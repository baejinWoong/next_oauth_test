import React from 'react'
import ElliSpaceSlide from './ElliSpaceSlide'
import TrailerTab from './TrailerTab'

const ElliSpace = () => {
  return (
    <div className="elliSpaceContainer">
      <div className="inner">
        <h2 className="title01">
          <span>ElliSPACE</span>에서 가능한 것들!
        </h2>
        <p className="subText01">
          현실에서는 경험하지 못했던 모든 것을 경험할 수 있는 새로운 세계
          <br />
          유명 셀럽을 만나거나 근사한 자동차와 비행기, 어마어마한 집도 가질 수 있어요!
        </p>
        <p className="subText02">
          상상하던 모든 것을 만들고 체험하고 가질 수 있는 내가 주인공이 되는 <span>ElliSPACE</span>
        </p>
        <ElliSpaceSlide />
        <TrailerTab />
      </div>
    </div>
  )
}

export default ElliSpace
