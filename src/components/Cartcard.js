import React, { useContext } from 'react'
import shopContext from '../context/shopContext';
import "../App.css"

function Cartcard(props) {
  const context= useContext(shopContext);
  const {removeFromCart} = context;

  const { item, index } = props;

  return (
    <>

      <div className="cart-item-container  mb-20  text-white flex " style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>

        <img src={item.image} className="h-full w-28 cart-image" />

        <div className='ml-3 h-full border-l-2 border-b-2 border-r-2 border-gray-900 w-full flex-col cart-detail-container'>

          <div className='h-1/2 flex justify-center items-center'>
            <span className='text-2xl ml-9 text-black'> {item.title}
            </span>
          </div>


          <div className='h-1/2 flex justify-around items-center mt-3 mb-3 ml-3 mr-3'>
            <span className='text-xl text-gray-800'>Price: ${item.price}
            </span>

            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {removeFromCart(index)}}>
              Remove from cart
            </button>

          </div>

        </div>


      </div>







    </>
  )
}

export default Cartcard