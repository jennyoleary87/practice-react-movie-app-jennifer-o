import { useState } from 'react'
import './App.css'
import MovieSelector from './components/selector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieSelector />
    </>
  )
}

export default App
