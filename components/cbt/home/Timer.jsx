import React, { useEffect } from 'react'

const Timer = ({ minutes, setMinutes, seconds, setSeconds }) => {
  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1)
      if (seconds === 0) {
        if (minutes === 0) clearInterval(countdown)
        else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => clearInterval(countdown)
  }, [minutes, seconds])

  return (
    <div className="timerText">
      {minutes}분 {seconds < 10 ? `0${seconds}` : seconds}초
    </div>
  )
}

export default Timer
