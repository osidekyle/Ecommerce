import React, { useContext, useEffect } from 'react';
import {GlobalContext} from "../Context/GlobalState"


const Checkout = () => {


    const {items} = useContext(GlobalContext)
    const {empty}= useContext(GlobalContext)

    


    return ( 
        <React.Fragment>
    <h1>Checkout</h1>
    <h3>Thanks for purchasing:</h3>
    {items.map(item=>(<h4>{item.external}</h4>))}

    </React.Fragment>
    );
}
 
export default Checkout;