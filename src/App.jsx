import { Route, Routes } from 'react-router-dom'
import './App.css'
import Filter from './Components/Filter'
import Navbar from './Components/Navbar'
import './index.css'
import HomePage from './Pages/HomePage'
import ListPage from './Pages/ListPage'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/list' element={<ListPage/>}></Route>
     </Routes>
    </>
  )
}

export default App
