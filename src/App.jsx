import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LastSeason from './pages/LastSeason'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		  <LastSeason />
    </>
  )
}

export default App
