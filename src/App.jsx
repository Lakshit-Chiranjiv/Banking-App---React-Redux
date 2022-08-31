import './App.css'
import Footer from './components/Footer'
import Homehero from './components/Homehero'
import Navbar from './components/Navbar'
import DepositPage from './pages/DepositPage'
import WithdrawPage from './pages/WithdrawPage'

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <Homehero/> */}
      {/* <DepositPage/> */}
      <WithdrawPage/>
      <Footer/>
    </div>
  )
}

export default App
