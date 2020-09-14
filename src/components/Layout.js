import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BeforeFooter from './BeforeFooter'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <BeforeFooter />
      <Footer />
    </>
  )
}

export default Layout
