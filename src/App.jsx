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
    </Routes>
    </>
  )
}

export default App
