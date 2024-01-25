import './App.css'
import Events from './components/Events/Events'
import Header from './components/Header/Header'
import LoginForm from './components/LoginForm/LoginForm'
import Speakers from './components/Speakers/Speakers'
import {Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Events/>} />
      <Route path="/speakers" element={<Speakers/>} />
      <Route path="/login" element={<LoginForm/>} />
    </Routes>
    </>
  )
}

export default App
