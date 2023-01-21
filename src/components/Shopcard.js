import React, { useContext } from 'react'
import Rating from './Rating';
import shopContext from '../context/shopContext';
import { Link } from 'react-router-dom';


function Shopcard(props) {

    const rating = Math.round(props.rating);
    const context = useContext(shopContext)
    const { addToCart, addViewProduct } = context;
    const item = props.item;

    return (
        <>

<center>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                <center><img className="rounded-t-lg shopcard-image" src={props.src} alt="" style={{ height: "300px",cursor:"pointer" }} /></center>
                <div className="p-5">
                    <Link to="/product" onClick={() => addViewProduct(item)}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                    <div className="flex items-center justify-center mt-1 mb-2">
                        {rating === 1 && <Rating />}
                        {rating === 2 && <><Rating /><Rating /></>}
                        {rating === 3 && <><Rating /><Rating /><Rating /></>}
                        {rating === 4 && <><Rating /><Rating /><Rating /><Rating /></>}
                        {rating === 5 && <><Rating /><Rating /><Rating /><Rating /><Rating /></>}
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{rating} out of 5</p>
                    </div>
                    <div className='mt-4'>
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => addToCart(props.item)}>
                            Add to cart
                        </button>
                        <Link to="/product" className="mt-2 ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => addViewProduct(props.item)}>
                           View Product
                        </Link>
                    </div>
                </div>
            </div>

</center>
        </>
    )
}

export default Shopcard