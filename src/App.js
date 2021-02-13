import React from 'react'
import { hot } from 'react-hot-loader'
import RenderRoutes from './routes'

const App = () => {
  return (
    <RenderRoutes />
  )
}

const mode = process.env.NODE_ENV
export default mode === 'development' ? hot(module)(App) : App
