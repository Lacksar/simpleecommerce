import React, { useContext } from 'react'
import shopContext from '../context/shopContext';
import Cartcard from './Cartcard';

function Cart() {

    const context = useContext(shopContext);
    const { cart } = context;
    

    return (

        <>

            <div className='mt-9'>

                {cart.length < 1 && <div className='flex justify-center items-center  text-gray-900' style={{ height: "80vh", textShadow: "0 0 1px black" }} >
                    <span className='text-4xl text-center'>
                      No items in Cart!
                    </span>

                </div>}




                {cart.length>=1 &&
                    cart.map((x, y) => {

                        return (
                            <>
                                <Cartcard item={x} index={y} />

                            </>

                        );




                    })
                }
            </div>

        </>
    );
}

export default Cart