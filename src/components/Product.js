import React, { useContext, useEffect, useState } from 'react'
import shopContext from '../context/shopContext'
import Rating from './Rating';
import "../App.css"


function Product(props) {

  const context = useContext(shopContext);
  const { viewProduct, addToCart } = context;





  return (
    <>

      {
        viewProduct && <>
          <div className='mt-3 ml-auto mr-auto flex flex-wrap mb-6 product-container' style={{
            width: "90%",
            minHeight: "90vh",
            display: "flex",
            alignItems: "center"


          }}>

            <div className='h-full w-1/3 flex items-center'>
              <img src={viewProduct.image} />
            </div>

            <div className='flex w-2/3  h-full flex items-center justify-center flex-col'>

              <div className='mb-5 flex justify-center'>
                <center><h1 className='text-3xl w-11/12 font-bold product-title'><span>{viewProduct.title}</span></h1></center>
              </div>


              <div className='w-full flex flex-col justify-center items-center mt-3 mb-3 description-sector'>
                <h1 className='text-3xl font-semibold '>Description</h1>
                <p className='w-2/3 text-2xl product-description'>{viewProduct.description}</p>
              </div>

              <div className="review w-full flex flex-col justify-center items-center mt-2 mb-2 text-xl">
                Rating: {viewProduct.rating.rate}  <div>{Math.round(viewProduct.rating.rate) === 1 && <Rating />}
                  {Math.round(viewProduct.rating.rate) === 2 && <><Rating /><Rating /></>}
                  {Math.round(viewProduct.rating.rate) === 3 && <><Rating /><Rating /><Rating /></>}
                  {Math.round(viewProduct.rating.rate) === 4 && <><Rating /><Rating /><Rating /><Rating /></>}
                  {Math.round(viewProduct.rating.rate) === 5 && <><Rating /><Rating /><Rating /><Rating /><Rating /></>}
                </div>
              </div>

              <div className="review w-full flex flex-col justify-center items-center mt-2 mb-3 text-2xl">
                Price: ${viewProduct.price}
              </div>

              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => addToCart(viewProduct)}>
                Add to cart
              </button>

            </div>
          </div>
        </> }


          
{viewProduct===false &&
            <div className='flex justify-center items-center bg-gray-700 text-white error' style={{ height: "90vh", textShadow: "0 0 40px black" }} >
              <span className='text-4xl text-center'>
                <p className='text-9xl font-semibold text-center'>404 error!</p>page not found!
              </span>

            </div>
}


    </>
  )
}

export default Product