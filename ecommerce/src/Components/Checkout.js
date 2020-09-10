import React, { useContext, useEffect,useState } from 'react';
import {GlobalContext} from "../Context/GlobalState"


const Checkout = () => {


    
    const {empty}= useContext(GlobalContext)
    const {checkouts}=useContext(GlobalContext)

    

    

    useEffect(()=>{
        console.log(checkouts)
        empty()

    },[])



    return ( 
        <React.Fragment>
    <h1>Checkout</h1>
    <h3>Thanks for purchasing:</h3>
    {checkouts.map(item=>(<h4>{item.external}</h4>))}

    </React.Fragment>
    );
}
 
export default Checkout;