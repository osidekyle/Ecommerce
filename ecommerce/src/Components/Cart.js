import React, { useEffect, useState, useContext } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {GlobalContext} from "../Context/GlobalState"
import {Link} from 'react-router-dom'

const Cart = () => {

   

    const {items} = useContext(GlobalContext)
    const {deleteItem} = useContext(GlobalContext)

    const removeItem=(e)=>{
        deleteItem(e.target.id)
    }

    return ( 
        <div className="container d-flex justify-content-center">
            <h1>Your Cart</h1>
            {items.map((item)=>(
                <React.Fragment>
                <h1>{item.external}</h1>
                <img src={item.thumb}></img>
                <h4>${item.gameID}</h4>
                <button className="btn btn-danger" id={item.gameID} onClick={removeItem}>Delete</button>
                </React.Fragment>
            ))}
            <div className="total row">
                <h1>Total</h1>
                {items.reduce((a,b)=>(parseInt(a)+parseInt(b.gameID)),0)}
                <Link to="/checkout"><button className="checkout-btn btn btn-primary">Checkout</button></Link>
            </div>
        </div>
     );
}
 
export default Cart;