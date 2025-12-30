import './App.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Projects/project'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div>
        <Nav/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default App
