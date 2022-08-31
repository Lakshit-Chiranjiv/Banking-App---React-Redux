import './App.css'
import Footer from './components/Footer'
import Homehero from './components/Homehero'
import Navbar from './components/Navbar'
import DepositPage from './pages/DepositPage'

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <Homehero/> */}
      <DepositPage/>
      <Footer/>
    </div>
  )
}

export default App
