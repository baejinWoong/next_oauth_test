import React from 'react'

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <div>{children}</div>
}

export default Layout
