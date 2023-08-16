import React, { useEffect } from 'react'
import Loader from '../../components/cbt/commons/Loader'
import { kakaoGetTockenTest } from '../../api/oath'

const KakaoLogin = () => {
  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code')
    void kakaoGetTockenTest(code).then((response) => {
      window.opener.kakaoTokenHandler(response.data.access_token)
      self.close()
    })
  }, [])

  return <Loader />
}

export default KakaoLogin
