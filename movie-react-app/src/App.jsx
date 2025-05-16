import { useState, useEffect } from 'react'
import './App.css'
import MovieSelector from './components/selector'

function App() {

  return (
    <>
      <div>
        <header>
          <h1>React Movie App</h1>
        </header>
        <div>
          <MovieSelector />
        </div>
      </div>
    </>
  )
}

export default App
