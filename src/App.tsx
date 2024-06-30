import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <Hero></Hero>
      <div className='main-content relative z-0'>
        <div className='content-wrapper m-auto max-w-[1200px]'>
          <Experience></Experience>
          <Portfolio></Portfolio>
          <Contact></Contact>
        </div>
      </div>
    </>
  )
}

export default App
