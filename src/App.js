import React, { useEffect } from 'react'
import Shopitems from './components/Shopitems'
import "./App.css"
import ShopState from './context/shopState'
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom'
import Cart from './components/Cart'
import Product from './components/Product'
import Navbar from './components/Navbar'




function App() {

  



  return (
    <>
      <BrowserRouter>
        <ShopState>

          <Navbar />
          <div style={{zIndex:"1"}}>
            <Routes>

              <Route exact path='/' element={<Shopitems />} ></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
              <Route exact path="/product" element={<Product />}></Route>
             <Route path='*' element={<div className='flex justify-center items-center bg-gray-700 text-white error' style={{ height: "90vh", textShadow: "0 0 40px black" }} >
              <span className='text-4xl text-center'>
                <p className='text-9xl font-semibold text-center'>404 error!</p>page not found!
              </span>

            </div>}/>

            </Routes>
          </div>
        </ShopState>
      </BrowserRouter>
    </>
  )
}

export default App