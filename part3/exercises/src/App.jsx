import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HobbyIntroduction from './components/Introduction'
import MyProjects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>My Hobby: Motorcycles</h1>
        <HobbyIntroduction/>
        <MyProjects/>
        
      </div>
      
    </>
  )
}

export default App
