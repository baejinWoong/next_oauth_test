import React from 'react'
// recoil Import
import { useRecoilState } from 'recoil'
import { snsLoginModalState } from '../../../recoil_atom/state'

const ConfirmModal = () => {
  const [, setShowSignUpModal] = useRecoilState(snsLoginModalState)

  const closeModalHandler = () => {
    setShowSignUpModal(false)
  }

  return (
    <div className="modal modalType03 open">
      <div className="modalArea">
        <div className="contents">
          <div className="confirmWrap">
            <div>
              <p>
                테스터 신청이 완료되었습니다
                <br />
                연동한 소셜계정으로 로그인할 수 있습니다
              </p>
              <div className="buttonWrap">
                <button type="button" className="redButton">
                  취소
                </button>
                <button type="button" className="grayButton">
                  취소
                </button>
                <button type="button" className="blueButton">
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="dim" onClick={closeModalHandler}></span>
    </div>
  )
}

export default ConfirmModal
