import Navbar from './components/Navbar'
import About from './pages/About'
import Admission from './pages/Admission'
import Events from './pages/Events'
import Home from './pages/Home'

function App() {
  return (
    <div className='p-0 m-0'>
      <Navbar />
      <Home />
      <About />
      <Admission />
      <Events />
    </div>
  )
}

export default App