import React, { useEffect } from 'react'
import Loader from '../../components/cbt/commons/Loader'
import { naverGetTokenTest } from '../../api/oath'

const NaverLogin = () => {
  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code')
    void naverGetTokenTest(code).then((response) => {
      window.opener.naverTokenHandler(response.data.access_token)
      self.close()
    })
  }, [])

  return <Loader />
}

export default NaverLogin
