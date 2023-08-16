import React, { useEffect } from 'react'
import Loader from '../../components/cbt/commons/Loader'
import { facebookGetTockenTest } from '../../api/oath'

const FacebookLogin = () => {
  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code')
    void facebookGetTockenTest(code).then((response) => {
      window.opener.facebookTokenHandler(response.data.access_token)
      self.close()
    })
  }, [])

  return <Loader />
}

export default FacebookLogin
