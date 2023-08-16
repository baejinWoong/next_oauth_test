import React from 'react'
import Layout from '../../../components/cbt/commons/Layout'

const CancelParticipation = () => {
  return (
    <Layout>
      <div className="container">
        <div className="cancelParticipationContainer">
          <div className="inner">
            <h2>참여 취소</h2>
            <p className="subText">
              참여를 취소하기 전에 <span className="colorRed">안내사항</span>을 확인해주세요
            </p>
            <div className="grayBox">
              <h3>참여 취소 안내</h3>
              <dl>
                <dt>참여 취소 시 해당 계정의 모든 정보가 삭제되어 복구가 불가능합니다</dt>
                <dd>※ 해당 계정의 모든 정보가 삭제되며 복구가 불가능합니다.</dd>
                <dd>※ 참여취소 신청 후, 7일이 지나면 홈페이지 로그인이 불가능합니다.</dd>
                <dd>※ 참여취소가 완료되면 모든 이벤트 참여 기록도 삭제되며 ElliSPACE 첫 시작 선물 및 이벤트 보상 수령이 불가능합니다.</dd>
              </dl>
              <dl>
                <dt>
                  참여취소 신청의 취소는 <span className="colorRed">7일 이내</span>에 가능합니다
                </dt>
                <dd>※ 참여취소 신청 후, 7일 동안은 취소가 가능합니다.</dd>
                <dd>※ 본인 계정을 타인이 도용하여 신청했을 시 7일 이내에 1:1문의를 통해 취소 신청을 해주셔야 참여취소 신청 취소가 가능합니다.</dd>
              </dl>
              <dl>
                <dt>
                  참여취소 완료 후, 동일한 SNS 계정으로 재가입은 <span className="colorRed">7일 이후</span>에 가능합니다
                </dt>
                <dd>※ 참여취소가 완료된 후, 7일 동안은 동일한 SNS계정으로 재가입이 불가능합니다.</dd>
              </dl>
            </div>
            <span className="inputCheckBox blockText">
              <input type="checkbox" name="" id="cancelCheckBox" />
              <label htmlFor="cancelCheckBox">신청취소 전 안내사항을 모두 확인하였습니다.</label>
            </span>
            <div className="buttonWrap">
              <button type="button" className="grayButton">
                이전화면으로
              </button>
              <button type="button" className="redButton">
                참여취소 신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CancelParticipation
