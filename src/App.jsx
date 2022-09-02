import { Routes,Route } from 'react-router-dom'
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
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from './redux/index.js'

function App() {

  const dispatch = useDispatch()

  const { depositMoney,withdrawMoney,takeLoan,payLoan } = bindActionCreators(ActionCreators,dispatch)

  return (
    <div className="App">
      <Navbar/>
      {/* <Homehero/> */}
      {/* <DepositPage/> */}
      {/* <WithdrawPage/> */}
      {/* <LoanPage/> */}
      {/* <LoanRepayPage/> */}
      {/* <TakeLoanPage/> */}
      {/* <AboutPage/> */}
      <Routes>
        <Route path='/' element={<Homehero/>} />
        <Route path='/deposit' element={<DepositPage/>} />
        <Route path='/withdraw' element={<WithdrawPage/>} />
        <Route path='/loan' element={<LoanPage/>} />
        <Route path='/loan/pay' element={<LoanRepayPage/>} />
        <Route path='/loan/take' element={<TakeLoanPage/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
