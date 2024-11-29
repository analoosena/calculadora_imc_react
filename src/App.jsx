import { useState } from 'react'
import './App.css'

import Calculadora from './Calculadora';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculadora/>
    </>
  )
}

export default App
