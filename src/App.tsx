import { useState } from 'react'
import Docs from './docs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Docs />
    </>
  )
}

export default App
