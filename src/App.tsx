import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Hero></Hero>
      <div className='main-content relative z-0'>
        <div className='content-wrapper m-auto max-w-[1200px] p-3'>
          <Skills></Skills>
          <Portfolio></Portfolio>
          <Experience></Experience>
          <Contact></Contact>
        </div>
      </div>
    </>
  )
}

export default App
