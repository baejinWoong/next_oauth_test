import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

// recoil Import
import { useRecoilState } from 'recoil'
import { snsLoginModalState } from '../../../recoil_atom/state'
import SignUpModal from '../modal/SignUpModal'

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [showSignUpModal, setShowSignUpModal] = useRecoilState(snsLoginModalState)

  const showSignUpModalHandler = () => {
    setShowSignUpModal(!showSignUpModal)
  }

  return (
    <div className="App">
      <Header showSignUpModalHandler={showSignUpModalHandler} />
      {children}
      <Footer />
      {Boolean(showSignUpModal) && <SignUpModal />}
    </div>
  )
}

export default Layout
