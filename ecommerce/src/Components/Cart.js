import React, { useEffect, useState, useContext } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {GlobalContext} from "../Context/GlobalState"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome'
import '../../../node_modules/@fortawesome/fontawesome-svg-core'
import { faTrash } from '../../../node_modules/@fortawesome/free-solid-svg-icons'

const Cart = () => {

   

    const {items} = useContext(GlobalContext)
    const {deleteItem} = useContext(GlobalContext)
    const {setCheckouts}=useContext(GlobalContext)

    const removeItem=(e)=>{
        console.log(e.target.id)
        deleteItem(e.target.id)
    }
    const checks=()=>{
        console.log('checks')
        setCheckouts()
    }

    const titleStyle={
        color:" #718db7",
        borderBottom:"solid 2px  #718db7"
    }

    const buttonStyle={
        background:"#c2cee1",
       border:"#c2cee1"
    }

    const itemStyle={
        
        borderBottom:"solid 1px  #718db7",
        width:"50%"
    }


    const checkoutStyle={
        background:" #718db7",
        color:"white",
        fontSize:"120%"
    }
    return ( 
        <div className="container justify-content-center">
            <div className="col-12">
            <h1 className="mb-5 display-3 " style={titleStyle}>Your Cart</h1>
            {items.map((item)=>(
                <div style={itemStyle} className="mb-3 ">
                <h1 className="display-4">{item.title}</h1>
                <img src={item.thumb}></img>
                <h4 className="display-4">${item.normalPrice}</h4>
                <button className="btn mb-3" style={buttonStyle} id={item.title} onClick={removeItem}><FontAwesomeIcon  id={item.title} icon={faTrash}></FontAwesomeIcon></button>
                </div>
            ))}
            <div className="total row">
                <h1 className="display-4">Total: </h1>
                <h1 className="display-4">${items.reduce((a,b)=>(parseFloat(a)+parseFloat(b.normalPrice)),0)}</h1>
                </div>
                <div className="row">
                <Link to={items.length? "/checkout" : "/cart"}><button onClick={items.length ? ()=>checks() : null} style={checkoutStyle} className="checkout-btn btn mb-5 mt-5 px-5 py-3">Checkout</button></Link>
            </div>
            </div>
        </div>
     );
}
 
export default Cart;