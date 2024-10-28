import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HellowWorld from './HellowWorld'
import Name from './Name'
import Heder from './comps/Header'
import Header from './comps/Header'
import Nav from './comps/Nav'
import Page from './comps/Page'

function App() {
  const [currPage, setCurr] = useState("Home")
  return (
    <div>
      <h1>{currPage}</h1>
      <Header />
      <div className="main"> 
      <Nav setCurr={setCurr}/>
      <Page currPage={currPage}/>
      </div>
    </div>
  )
}

export default App
