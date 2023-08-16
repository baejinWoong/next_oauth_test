import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="inner2">
        <h2>
          <Link href="/">
            <img src="/static/images/common/logo_02.png" alt="ElliSPACE" />
          </Link>
        </h2>
        <p className="copyRight">© 2023 ELPark. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer
