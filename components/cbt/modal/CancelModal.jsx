import React from 'react'

const CancelModal = () => {
  return (
    <div className="modal modalType03 open">
      <div className="modalArea">
        <div className="contents">
          <div className="cancelWrap">
            <div>
              <strong>참여 취소 신청 계정입니다</strong>
              <div className="text">
                <p>
                  ElliSPACE 첫 시작 참여를 취소중입니다.
                  <br />
                  참여신청 취소일로부터 7일이 지나면&nbsp;
                  <br className="mobileNone" />
                  참여신청 취소가 확정되어&nbsp;
                  <br className="mobileNone" />
                  ElliSPACE 첫 시작에 참여할 수 없습니다
                </p>
                <p>
                  참여신청 취소를 취소하고&nbsp;
                  <br className="mobileNone" />
                  ElliSPACE의 첫 시작을 함께 하시겠습니까?
                </p>
              </div>
              {/* <strong>회원탈퇴 신청 계정입니다</strong>
              <div className="text">
                <p>
                  ElliSPACE 회원탈퇴를 신청하셨습니다.
                  <br />
                  회원탈퇴 신청일로부터 7일이 지나면&nbsp;
                  <br className="mobileNone" />
                  회원탈퇴가 확정되어 ElliSPACE 이용이 불가합니다.
                  <br />
                  회원탈퇴 신청을 취소하고&nbsp;
                  <br className="mobileNone" />
                  ElliSPACE를 계속 이용하시겠습니까?
                </p>
              </div> */}
              <div className="buttonWrap">
                <button type="button" className="blueButton">
                  네. ElliSPACE를 계속 이용할게요
                </button>
                <button type="button" className="grayButton">
                  아니요. 회원탈퇴 신청 유지합니다
                </button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="closeButton">
          <img src="../static/images/ico/ico_close_01.png" alt="close button" />
        </button>
      </div>
      <span className="dim"></span>
    </div>
  )
}

export default CancelModal
