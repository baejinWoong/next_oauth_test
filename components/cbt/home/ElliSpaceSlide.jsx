import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ElliSpaceSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2500,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '0',
    focusOnSelect: true,
    pauseOnHover: false,
  }
  return (
    <div className="elliSpaceSlide">
      <Slider {...settings}>
        <div className="item">
          <img src="../static/images/image/img_sample_01.png" alt="elliSpaceImage" />
        </div>
        <div className="item">
          <img src="../static/images/image/img_sample_01.png" alt="elliSpaceImage" />
        </div>
        <div className="item">
          <img src="../static/images/image/img_sample_01.png" alt="elliSpaceImage" />
        </div>
        <div className="item">
          <img src="../static/images/image/img_sample_01.png" alt="elliSpaceImage" />
        </div>
        <div className="item">
          <img src="../static/images/image/img_sample_01.png" alt="elliSpaceImage" />
        </div>
        <div className="item">
          <img src="../static/images/image/img_sample_01.png" alt="elliSpaceImage" />
        </div>
      </Slider>
    </div>
  )
}

export default ElliSpaceSlide
