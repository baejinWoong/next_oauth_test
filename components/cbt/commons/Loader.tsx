import React from 'react'

import style from '../../../styles/cbt/scss/loader.module.scss'

const Loader = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ccc',
        transition: '.2s linear',
        position: 'relative',
        backgroundColor: '#222222',
      }}
    >
      <span className={style.loader}></span>
    </div>
  )
}

export default Loader
