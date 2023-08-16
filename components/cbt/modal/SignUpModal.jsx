import React from 'react'
import Apply from '../home/Apply'
// recoil Import
import { useRecoilState } from 'recoil'
import { snsLoginModalState } from '../../../recoil_atom/state'

const SignUpModal = () => {
  const [, setShowSignUpModal] = useRecoilState(snsLoginModalState)

  const closeModalHandler = () => {
    setShowSignUpModal(false)
  }

  return (
    <div className="modal modalType02 open">
      <div className="modalArea">
        <div className="contents applyWrap">
          <Apply id="mobileApplyCheck" />
          <button type="button" className="closeButton" onClick={closeModalHandler}>
            <img src="../static/images/ico/ico_close_01.png" alt="close button" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUpModal
