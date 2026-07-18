import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Company from "./pages/Company"
import Home from "./pages/Home"
import About from "./pages/About"
import {Routes,Route} from 'react-router-dom'
import Register from "./components/Register"
function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/company' element={<Company/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      <Footer/>
    </>
  )
}



export default App
