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
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  )
}

export default App
