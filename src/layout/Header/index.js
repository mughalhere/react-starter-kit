import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default () => {
  return (
    <nav id='Header'>
      <Link to='/'>Home</Link>
      <Link to='/resources'>Resources</Link>
      <Link to='/anypage'>Not Found</Link>
    </nav>
  )
}
