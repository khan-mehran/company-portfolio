import Header from 'import/components/common/header/Header';
import Footer from 'import/components/common/footer/Footer';
import React from 'react';

const RootLayout = ({children}: any) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default RootLayout