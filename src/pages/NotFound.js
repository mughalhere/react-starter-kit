import React from 'react'

export default () => {
  return (
    <div className='animate-opacity text-white'>
      <div className='display-middle'>
        <h1 className='jumbo animate-top'>404 Not Found</h1>
        <hr className='border-grey horizontal-line' />
        <p className='large center'>
          the page you are looking for is not found :/
        </p>
      </div>
      <div className='display-bottomleft padding-large'>
        Powered by{' '}
        <a href='https://github.com/mughalhere'>
          mughalhere
        </a>
      </div>
    </div>
  )
}
