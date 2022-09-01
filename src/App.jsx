import './App.css'
import Footer from './components/Footer'
import Homehero from './components/Homehero'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import DepositPage from './pages/DepositPage'
import LoanPage from './pages/LoanPage'
import LoanRepayPage from './pages/LoanRepayPage'
import TakeLoanPage from './pages/TakeLoanPage'
import WithdrawPage from './pages/WithdrawPage'

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <Homehero/> */}
      {/* <DepositPage/> */}
      {/* <WithdrawPage/> */}
      {/* <LoanPage/> */}
      {/* <LoanRepayPage/> */}
      {/* <TakeLoanPage/> */}
      <AboutPage/>
      <Footer/>
    </div>
  )
}

export default App
