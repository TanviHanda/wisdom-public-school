import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <div className='p-0 m-0'>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App