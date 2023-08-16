import React from 'react'
import Layout from '../../../components/cbt/commons/Layout'

const Withdrawal = () => {
  return (
    <Layout>
      <div className="container">
        <div className="withdrawalContainer">
          <div className="inner">
            <h2>회원 탈퇴</h2>
            <p className="subText">
              탈퇴를 신청하기 전에 <span className="colorRed">안내사항</span>을 확인해주세요
            </p>
            <div className="grayBox">
              <h3>회원 탈퇴 안내</h3>
              <dl>
                <dt>회원탈퇴 완료 시 해당 계정의 모든 정보가 삭제되어 복구가 불가능합니다</dt>
                <dd>※ 해당 계정의 모든 정보 및 메타버스 정보(캐릭터, 아이템, 전적, 업적 등 일체)가 삭제되며 복구가 불가능합니다.</dd>
                <dd>※ 회원탈퇴 신청 즉시 메타버스 플레이가 불가능합니다. (회원탈퇴 신청 후, 7일동안 홈페이지 이용만 가능합니다.)</dd>
                <dd>※ 회원탈퇴 신청 후, 7일이 경과하면 모든 이벤트 참여 기록도 삭제되며 ElliSPACE 첫 시작 선물 및 이벤트 보상 수령이 불가능합니다.</dd>
              </dl>
              <dl>
                <dt>
                  회원탈퇴 신청 취소는 <span className="colorRed">7일 이내</span>에 가능합니다
                </dt>
                <dd>※ 회원탈퇴 신청 후, 7일 동안은 회원탈퇴 신청 취소가 가능합니다.</dd>
                <dd>※ 본인 계정을 타인이 도용하여 신청했을 시 7일 이내에 1:1문의를 통해 취소 신청을 해주셔야 합니다.</dd>
              </dl>
              <dl>
                <dt>
                  회원탈퇴 후, 동일한 SNS 계정으로 재가입은 <span className="colorRed">14일 이후</span>에 가능합니다
                </dt>
                <dd>※ 회원탈퇴 신청 후, 14일 동안은 동일한 SNS계정으로 재가입이 불가능합니다.</dd>
              </dl>
            </div>
            <span className="inputCheckBox blockText">
              <input type="checkbox" name="" id="withdrawalCheckBox" />
              <label htmlFor="withdrawalCheckBox">회원 탈퇴 전 안내사항을 모두 확인하였습니다.</label>
            </span>
            <div className="buttonWrap">
              <button type="button" className="grayButton">
                이전화면으로
              </button>
              <button type="button" className="redButton">
                회원탈퇴 신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Withdrawal
