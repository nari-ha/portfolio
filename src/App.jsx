import { useState, useEffect } from 'react'
import './App.css'
import Work from './components/Work'
import List from './components/List'
import Profile from './components/Profile'
import Intro from './components/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <div className="main-logo">
          Nari
        </div>
        <div className="nav-bar">
          <ul>
            <li>home</li>
            <li>profile</li>
            <li>experience</li>
            <li>work</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li className="ig">
              <a href="https://www.linkedin.com/in/narihanar/"><img src="/images/li-logo.svg"/></a>
            </li>
            <li className="gh">
              <a href="https://github.com/nari-ha"><img src="/images/gh-logo.svg"/></a>
            </li>
            <li className="li">
              <img src="/images/ig-logo.svg"/>
            </li>
          </ul>
        </div>
      </div>
      <Intro></Intro>
    </>
  )
}

export default App
