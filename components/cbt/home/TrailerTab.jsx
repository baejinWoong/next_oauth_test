import React, { useState } from 'react'

const TrailerTab = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  const changeTabHandler = (index) => setSelectedTab(index)

  return (
    <div className="trailerTabContainer">
      <ul className="tabMenu">
        {new Array(3).fill('').map((item, index) => {
          return (
            <li
              className={selectedTab === index ? 'active' : ''}
              key={index}
              onClick={() => {
                changeTabHandler(index)
              }}
            >
              <button type="button">트레일러{index + 1}</button>
            </li>
          )
        })}
      </ul>
      <div className="tabWrap">
        <div className="tabContent">
          {selectedTab === 0 && (
            <>
              <div className="videoWrap">
                <div className="videoBox">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/ecojthFgZh8?controls=0&playlist=ecojthFgZh8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
              <p className="text">제공되는 영상에 맞는 문구 삽입 예정 제공되는 영상에 맞는 문구 삽입 예정</p>
            </>
          )}
          {selectedTab === 1 && (
            <>
              <div className="videoWrap">
                <div className="videoBox">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/ecojthFgZh8?controls=0&playlist=ecojthFgZh8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
              <p className="text">제공되는 영상에 맞는 문구 삽입 예정</p>
            </>
          )}
          {selectedTab === 2 && (
            <>
              <div className="videoWrap">
                <div className="videoBox">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/ecojthFgZh8?controls=0&playlist=ecojthFgZh8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
              <p className="text">제공되는 영상에 맞는 문구 삽입 예정</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrailerTab
