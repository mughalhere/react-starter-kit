import React from 'react'
import Header from '../layout/Header'

export default ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
