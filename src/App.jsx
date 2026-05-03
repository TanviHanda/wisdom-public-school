import Navbar from './components/Navbar'
import About from './pages/About'
import Admission from './pages/Admission'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Home from './pages/Home'

function App() {
  return (
    <div className='p-0 m-0'>
      <Navbar />
      <Home />
      <div className="pt-20">
        <About />
        <Admission />
        <Events />
        <Contact />
      </div>
    </div>
  )
}

export default App