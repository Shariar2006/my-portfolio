
import AboutMe from './AboutMe'
import './App.css'
import ContactMe from './ContactMe'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Project from './Projects/Project'

function App() {

  return (
    <div className='max-w-7xl mx-auto p-8'>
      {/* navbar */}
      <Navbar></Navbar>

      {/* home container */}
      <Home></Home>
      {/* about container */}
      <AboutMe></AboutMe>
      {/* project container */}
      <Project></Project>
      {/* contact container */}
      <ContactMe></ContactMe>
      {/* footer container */}
      <Footer></Footer>
    </div>
  )
}

export default App
