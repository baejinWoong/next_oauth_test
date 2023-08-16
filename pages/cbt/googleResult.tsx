import React, { useEffect } from 'react'
import Loader from '../../components/cbt/commons/Loader'
import { googleGetTockenTest } from '../../api/oath'

const GoogleLogin = () => {
  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code')
    void googleGetTockenTest(code).then((response) => {
      window.opener.googleTokenHandler(response.data.id_token)
      self.close()
    })
  }, [])

  return <Loader />
}

export default GoogleLogin
