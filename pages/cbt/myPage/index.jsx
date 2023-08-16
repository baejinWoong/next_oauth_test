import React from 'react'
import Layout from '../../../components/cbt/commons/Layout'

const MyPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="myPageMainContainer">
          <div className="inner">
            <div className="memberInfo">
              <h2>회원 정보</h2>
              <div className="memberInfoBox">
                <ul>
                  <li>
                    <strong>
                      <i className="email"></i>
                      이메일
                    </strong>
                    <p>abcd@gmai.com</p>
                  </li>
                  <li>
                    <strong>
                      <i className="person"></i>
                      이름
                    </strong>
                    <p>홍길동홍길동</p>
                  </li>
                  <li>
                    <strong>
                      <i className="nickName"></i>
                      닉네임
                    </strong>
                    <p>닉네임표시닉네임표시</p>
                  </li>
                  <li>
                    <strong>
                      <i className="login"></i>
                      로그인 수단
                    </strong>
                    <p>카카오톡</p>
                  </li>
                </ul>
              </div>
              <div className="buttonWrap">
                <button type="button">참여취소</button>
                <button type="button">회원탈퇴</button>
              </div>
            </div>
            <div className="inquire">
              <h2>
                1:1문의
                <span className="count">
                  총 <span>100</span>개
                </span>
              </h2>
              <div className="tableWrap">
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>제목</th>
                      <th>작성일</th>
                      <th>답변상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="noInquiry">
                        <p>문의 내역이 없습니다</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="active">
                        <div className="inquireTitle">
                          <span>003</span>
                          <span>
                            <span>입력한 제목이 표시됩니다입력한 제목이 표시됩니다입력한 제목이 표시됩니다입력한 제목이 표시됩니다</span>
                          </span>
                          <span>2022-10-13</span>
                          <span className="state">
                            <span className="complete">답변완료</span>
                          </span>
                        </div>
                        <div className="contentsBox">
                          <div className="contents">
                            <strong>문의</strong>
                            <div className="inquireContent">
                              <p>
                                등록한 문의 내용이 표시됩니다등록한 문의 내용이 표시됩니다등록한 문의 내용이 표시됩니다등록한 문의 내용이 표시됩니다등록한 문의
                                내용이 표시됩니다
                              </p>
                              <div className="attachedFileArea">
                                <a href="/">
                                  <span>첨부파일 1.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 2.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 3.jpg</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="answer">
                            <strong>답변</strong>
                            <div className="inquireContent">
                              <p>
                                관리자가 등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가 등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가
                                등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가 등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가 등록한 답변
                                내용이 표시됩니다 2줄로 표기 되었을때
                              </p>
                              <div className="attachedFileArea">
                                <a href="/">
                                  <span>첨부파일 1.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 2.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 3.jpg</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <div className="inquireTitle">
                          <span>002</span>
                          <span>
                            <span>입력한 제목이 표시됩니다</span>
                          </span>
                          <span>2022-10-13</span>
                          <span className="state">
                            <span className="wait">답변대기</span>
                          </span>
                        </div>
                        <div className="contentsBox">
                          <div className="contents">
                            <strong>문의</strong>
                            <div className="inquireContent">
                              <p>등록한 문의 내용이 표시됩니다</p>
                              <div className="attachedFileArea">
                                <a href="/">
                                  <span>첨부파일 1.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 2.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 3.jpg</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="answer">
                            <strong>답변</strong>
                            <div className="inquireContent">
                              <p>
                                관리자가 등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가 등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가
                                등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가 등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가 등록한 답변
                                내용이 표시됩니다 2줄로 표기 되었을때
                              </p>
                              <div className="attachedFileArea">
                                <a href="/">
                                  <span>첨부파일 1.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 2.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 3.jpg</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <div className="inquireTitle">
                          <span>001</span>
                          <span>
                            <span>입력한 제목이 표시됩니다</span>
                          </span>
                          <span>2022-10-13</span>
                          <span className="state">
                            <span className="complete">답변완료</span>
                          </span>
                        </div>
                        <div className="contentsBox">
                          <div className="contents">
                            <strong>문의</strong>
                            <div className="inquireContent">
                              <p>등록한 문의 내용이 표시됩니다</p>
                              <div className="attachedFileArea">
                                <a href="/">
                                  <span>첨부파일 1.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 2.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 3.jpg</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="answer">
                            <strong>답변</strong>
                            <div className="inquireContent">
                              <p>
                                관리자가 등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가 등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가
                                등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가 등록한 답변 내용이 표시됩니다 2줄로 표기 되었을때관리자가 등록한 답변
                                내용이 표시됩니다 2줄로 표기 되었을때
                              </p>
                              <div className="attachedFileArea">
                                <a href="/">
                                  <span>첨부파일 1.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 2.jpg</span>
                                </a>
                                <a href="/">
                                  <span>첨부파일 3.jpg</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="buttonWrap">
                <button type="button" className="viewMoreButton">
                  <span>더보기</span>
                </button>
                <button type="button" className="registerButton">
                  <span>문의 등록</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MyPage
