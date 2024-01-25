import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import LoginForm from './components/LoginForm/LoginForm'
import Speakers from './components/Speakers/Speakers'
import {Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/speakers" element={<Speakers/>} />
      <Route path="/login" element={<LoginForm/>} />
    </Routes>
    </>
  )
}

export default App
