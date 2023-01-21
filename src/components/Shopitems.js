import React, { useContext } from 'react'
import shopContext from '../context/shopContext'
import Shopcard from './Shopcard';
import "../App.css"
import ScrollToTop from './ScrollToTop';

function Shopitems() {

    const shopdata = useContext(shopContext);
    const { productList } = shopdata;
    



    return (
        <>
        

            <div className='mt-9 shopitems-container' style={{ gap:"2em"}}>
                {productList.map((x, y) => {


                    return (

                        <>

                            <Shopcard src={x.image} title={x.title.length>40 ? x.title.slice(0,40)+"...": x.title} description={x.description.length>90?x.description.slice(0,90)+"...":x.description} rating={x.rating.rate} item={x} />

                        </>

                    )


                })}




            </div>
        </>
    )
}

export default Shopitems