import React, { useEffect, useState } from 'react'
import { checkVerifyCode, duplicateCheckNickname, sendVerifyEmail } from '../../../api/user'
import AppleButton from '../snsButton/AppleButton'
import FacebookButton from '../snsButton/FacebookButton'
import GoogleButton from '../snsButton/GoogleButton'
import KakaoButton from '../snsButton/KakaoButton'
import NaverButton from '../snsButton/NaverButton'
import TermsModal from '../modal/TermsModal'
import Timer from './Timer'

const Apply = ({ id }) => {
  const [minutes, setMinutes] = useState(5)
  const [seconds, setSeconds] = useState(0)

  const [showTermsModal, setShowTermsModal] = useState(false)
  const [snsButtonDisable, setSnsButtonDisable] = useState(true)
  const [validation, setValidation] = useState({
    nicknameDuplicateErrorCode: '',
    confirmEmailErrorCode: '',
    checkedAgree: false,
    sendEmail: false,
    emailNumber: '',
    emailPattern: false,
  })
  const [userInfo, setUserInfo] = useState({
    name: '',
    nickname: '',
    email: '',
    emailCode: '',
  })

  const showModalHandler = () => setShowTermsModal((prevState) => !prevState)
  const checkAgreeHandler = () => setValidation({ ...validation, checkedAgree: !validation.checkedAgree })
  const changeEmailCodeHandler = (event) => setUserInfo({ ...userInfo, emailCode: event.target.value })
  const sendEmailHandler = () => {
    if (!validation.emailPattern || validation.confirmEmailErrorCode === 'E20002') return false
    sendVerifyEmail({ email: userInfo.email }).then((response) => {
      alert(response.data.data)
      setValidation({ ...validation, sendEmail: true })
      setMinutes(5)
      setSeconds(0)
    })
  }

  const confirmEmailHandler = () => {
    if (validation.confirmEmailErrorCode === 'E20002') return false
    checkVerifyCode({ email: userInfo.email, number: userInfo.emailCode }).then((response) =>
      setValidation({ ...validation, confirmEmailErrorCode: response.data.status.code }),
    )
  }

  const blurNicknameHandler = () => {
    if (userInfo.nickname === '') {
      setValidation({ ...validation, nicknameDuplicateErrorCode: '' })
      return false
    }

    if (nickNamePatternCheck(userInfo.nickname)) {
      setValidation({ ...validation, nicknameDuplicateErrorCode: 'E00001' })
      return false
    }

    duplicateCheckNickname({ nickName: userInfo.nickname }).then((response) => {
      setValidation({ ...validation, nicknameDuplicateErrorCode: response.data.status.code })
    })
  }

  const userInfoInputHandler = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    })
  }

  const emailPatternCheck = () => {
    // eslint-disable-next-line no-useless-escape
    const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    setValidation({ ...validation, emailPattern: regex.test(userInfo.email) })
  }
  const nickNamePatternCheck = (nickName) => {
    const regex = /^[가-힣|a-z|A-Z|0-9|]+$/
    return !regex.test(nickName)
  }

  useEffect(() => {
    if (
      validation.nicknameDuplicateErrorCode === 'E20002' &&
      validation.confirmEmailErrorCode === 'E20002' &&
      validation.checkedAgree &&
      userInfo.name !== ''
    ) {
      setSnsButtonDisable(false)
    } else {
      setSnsButtonDisable(true)
    }
  }, [validation, userInfo.name])

  useEffect(() => {
    emailPatternCheck()
  }, [userInfo.email])

  return (
    <div className="applyContainer">
      <div className="inner">
        <h2>지금 바로 신청하기</h2>
        <div className="subText">
          <p>
            필수정보와 소셜계정만으로 새로운 세계에 참여할 준비 끝!
            <br />
            신청한 소셜계정으로 로그인하여 즐겁게 플레이!
          </p>
          <p>새로운 세계의 첫번째 경험은 PC&#40;Windows&#41;에서만 가능합니다</p>
        </div>
        <div className="content">
          <div className="form">
            <div className="col2">
              <div className="width342">
                <label htmlFor="name" className="formLabel">
                  이름<span>&#40;필수&#41;</span>
                </label>
                <span id="name" className="inputText">
                  <input type="text" placeholder="이름을 입력하세요" name="name" maxLength={5} value={userInfo.name} onChange={userInfoInputHandler} />
                </span>
              </div>
              <div className="width342">
                <label htmlFor="nickname" className="formLabel">
                  닉네임<span>&#40;필수&#41;</span>
                </label>
                <span id="nickname" className="inputText">
                  <input
                    type="text"
                    placeholder="닉네임을 입력하세요"
                    name="nickname"
                    value={userInfo.nickname}
                    onChange={userInfoInputHandler}
                    onBlur={blurNicknameHandler}
                  />
                  <span className="inputMessage">
                    {validation.nicknameDuplicateErrorCode === 'E20002' && <span className="success">사용 가능한 닉네임입니다</span>}
                    {validation.nicknameDuplicateErrorCode === 'E00001' && <span className="error">영어,숫자,한글만 입력 가능합니다</span>}
                    {validation.nicknameDuplicateErrorCode === 'E40010' && <span className="error">이미 존재하는 닉네임입니다</span>}
                    {validation.nicknameDuplicateErrorCode === 'E40011' && <span className="error">닉네임으로 사용할수 없는 단어가 포함되어 있습니다</span>}
                  </span>
                </span>
              </div>
            </div>
            <div className="marginTop40">
              <label htmlFor="email" className="formLabel">
                이메일<span>&#40;필수&#41;</span>
              </label>
              <div className="col2 marginTopMinus19">
                <span id="email" className="inputText width474">
                  <input
                    type="text"
                    placeholder="이메일을 입력하세요"
                    name="email"
                    value={userInfo.email}
                    onChange={userInfoInputHandler}
                    onBlur={emailPatternCheck}
                    readOnly={validation.sendEmail}
                  />
                  {userInfo.email !== '' && !validation.emailPattern && (
                    <span className="inputMessage">
                      <span className="error">유효하지 않은 이메일 주소 입니다</span>
                    </span>
                  )}
                </span>
                {validation.sendEmail || (
                  <button type="button" className="certifiedButton" onClick={sendEmailHandler}>
                    <span className={`mobileBtn ${validation.emailPattern ? 'bgBlue' : ''}`}>
                      <span>인증하기</span>
                    </span>
                  </button>
                )}
                {validation.sendEmail && (
                  <button type="button" className="reSendButton" onClick={sendEmailHandler}>
                    <span className="mobileBtn bgBlue">
                      <span>재전송</span>
                    </span>
                  </button>
                )}
              </div>
              {validation.sendEmail && (
                <div className="col2 marginTopMinus19">
                  <span className="inputText width474">
                    <input
                      type="text"
                      placeholder="인증번호를 입력하세요"
                      value={userInfo.emailCode}
                      onChange={changeEmailCodeHandler}
                      readOnly={validation.confirmEmailErrorCode === 'E20002'}
                    />
                    {validation.confirmEmailErrorCode !== 'E20002' && (
                      <Timer minutes={minutes} setMinutes={setMinutes} seconds={seconds} setSeconds={setSeconds} />
                    )}
                    <span className="inputMessage">
                      {validation.confirmEmailErrorCode === 'E20002' && <span className="success">인증이 완료되었습니다</span>}
                      {validation.confirmEmailErrorCode === 'E40012' && <span className="error">인증번호가 일치하지 않습니다</span>}
                      {validation.confirmEmailErrorCode === 'E40013' && <span className="error">입력 시간이 초과되었습니다</span>}
                    </span>
                  </span>
                  <button type="button" className="confirmButton" onClick={confirmEmailHandler}>
                    <img src="../static/images/button/btn_certified_02.png" alt="인증확인 버튼" className="pc mobileMarginMinus" />
                    <span className="mobileBtn bgBlue mobile mobileMarginMinus">
                      <span>인증확인</span>
                    </span>
                  </button>
                </div>
              )}
            </div>
            <span className="inputCheckBox">
              <input type="checkbox" id={id} checked={validation.checkedAgree} onChange={checkAgreeHandler} />
              <label htmlFor={id}>
                ElliSPACE에서 개인정보를 사용하는 것과 이벤트 규정에 동의합니다 <span className="essential">&#40;필수&#41;</span>
                <button type="button" onClick={showModalHandler}>
                  자세히 보기
                </button>
              </label>
            </span>
          </div>
          <div className="snsButtonBox">
            <KakaoButton disabled={snsButtonDisable} userInfo={userInfo} isSignIn={false} />
            <NaverButton disabled={snsButtonDisable} userInfo={userInfo} isSignIn={false} />
            <GoogleButton disabled={snsButtonDisable} userInfo={userInfo} isSignIn={false} />
            <AppleButton disabled={snsButtonDisable} userInfo={userInfo} color="white" isSignIn={false} />
            <FacebookButton disabled={snsButtonDisable} userInfo={userInfo} isSignIn={false} />
          </div>
        </div>
      </div>
      {showTermsModal && <TermsModal showModalHandler={showModalHandler} />}
    </div>
  )
}

export default Apply
