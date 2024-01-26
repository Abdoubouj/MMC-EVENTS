import './App.css'
import EventDetails from './components/EventDetails/EventDetails'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import LoginForm from './components/LoginForm/LoginForm'
import Speakers from './components/Speakers/Speakers'
import SpeakerDetails from "./components/SpeakerDetails/SpeakerDetails"
import {Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/speakers" element={<Speakers/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/events/:id" element={<EventDetails/>} />
      <Route path='/speakers/:id' element={<SpeakerDetails/>}/>
    </Routes>
    </>
  )
}

export default App
