import { Login } from '@mui/icons-material'
import './App.css'
import Events from './components/Events/Events'
import Header from './components/Header/Header'
import Speakers from './components/Speakers/Speakers'
import {Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Events/>} />
      <Route path="/speakers" element={<Speakers/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  )
}

export default App
