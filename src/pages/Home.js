import React from 'react'
import '../styles/App.css'

export default () => {
  return (
    <div className='home-main-container'>
      <div className='animate-opacity text-white'>
        <div className='display-middle'>
          <h1 className='jumbo animate-top'>React Starter</h1>
          <hr className='border-grey horizontal-line' />
          <p className='large center'>
            Set up a modern web app easily.
            <br />
            <br />
            <a className='button' href='https://github.com/mughalhere/react-starter-kit'>
              Documentation
            </a>
          </p>
        </div>
        <div className='display-bottomleft padding-large'>
          Powered by{' '}
          <a href='https://github.com/mughalhere'> mughalhere </a>
        </div>
      </div>
    </div>
  )
}
