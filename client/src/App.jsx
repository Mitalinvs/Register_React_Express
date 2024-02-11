import {Toaster} from 'react-hot-toast'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import Login from './login'
import Home from './home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Toaster/>
      <Routes>
        {/* <Route path='/register'element={<Signup />}></Route> */}
        <Route path='/'element={<Signup />}></Route>
        <Route path='/login'element={<Login />}></Route>
        <Route path='/home'element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

    // <div>
    //   <Signup />
    // </div>
  )
}

export default App
