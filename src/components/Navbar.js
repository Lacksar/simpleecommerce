import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function Navbar() {
  return (
    <>


      <div className='bg-gray-400 h-16 w-full flex sticky top-0 navbar-container' style={{zIndex:2}}>

        <div className='w-1/3 h-full bg-gray-900 flex items-center justify-center nav-fir'><span className='text-2xl text-white'>Ecommerce</span></div>

        <div className='w-2/3 h-full bg-gray-900 flex text-white items-center justify-around nav-sec'>

        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        </div>


      </div>


    </>
  )
}

export default Navbar