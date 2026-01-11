import { Route, Routes } from 'react-router-dom'
import './App.css'
import Filter from './Components/Filter'
import Navbar from './Components/Navbar'
import './index.css'
import HomePage from './Pages/HomePage'
import ListPage from './Pages/ListPage'
import ItemDetails from './Pages/ItemDetails'
import Cart from './Pages/Cart'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/list' element={<ListPage/>}></Route>
      <Route path='/itemdetails' element={<ItemDetails/>}></Route>
      <Route path='/cart' element={<Cart />}></Route>
     </Routes>
    </>
  )
}

export default App
