import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import MemberShip from './components/MemberShip'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Franchise from './components/Franchise'
function App() {

  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/membership' element={<MemberShip/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/franchise' element={<Franchise/>}/>

    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
