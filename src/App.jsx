import { useState, useEffect } from 'react'
import './App.css'
import Work from './components/Work'
import List from './components/List'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <div className="main-logo"></div>
        <div className="nav-bar">
          <ul>
            <li>profile</li>
            <li>experience</li>
            <li>education</li>
            <li>work</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
