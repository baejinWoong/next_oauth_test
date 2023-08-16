import React, { useState } from 'react'
import Apply from '../components/cbt/home/Apply'
import Present from '../components/cbt/home/Present'
import ElliSpace from '../components/cbt/home/ElliSpace'
import Visual from '../components/cbt/home/Visual'
import Event from '../components/cbt/home/Event'
import Layout from '../components/cbt/commons/Layout'
// recoil Import
import { useRecoilState } from 'recoil'
import { snsLoginModalState } from '../recoil_atom/state'

const Home = () => {
  const [showSignUpModal, setShowSignUpModal] = useRecoilState(snsLoginModalState)

  const showSignUpModalHandler = () => {
    setShowSignUpModal(!showSignUpModal)
  }

  return (
    <Layout>
      <div className="container">
        <Visual showSignUpModalHandler={showSignUpModalHandler} />
        <ElliSpace />
        <Present showSignUpModalHandler={showSignUpModalHandler} />
        <div className="pc">
          <Apply id="pcApplyCheck" />
        </div>
        {/* <Event /> */}
      </div>
    </Layout>
  )
}

export default Home
