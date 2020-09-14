import React, { useContext, useEffect,useState } from 'react';
import {GlobalContext} from "../Context/GlobalState"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Link} from 'react-router-dom'

const Checkout = () => {


    
    const {empty}= useContext(GlobalContext)
    const {checkouts}=useContext(GlobalContext)

    

    

    useEffect(()=>{
        console.log(checkouts)
        empty()

    },[])


    const itemStyle={
        
        borderBottom:"solid 1px  #718db7",
        width:"50%"
    }

    const buttonStyle={
        color:'white',
        background:' #718db7'
    }
    return ( 
        
    
    <div className="container justify-content-center">
            <div className="col-12">
            <h3 style={{color:" #718db7", borderBottom:"solid 2px #718db7"}} className="pb-1 display-3">Thanks for purchasing:</h3>
            {checkouts.map((item)=>(
                <div style={itemStyle} className="mb-3 ">
                <h1 className="display-4">{item.title}</h1>
                <img src={item.thumb}></img>
                <h4 className="display-4">${item.normalPrice}</h4>
                </div>
            ))}
            <Link to="/products"><button style={buttonStyle} className="btn px-5 mb-5 py-3">Back To Shopping</button></Link>
    </div>
    </div>
    );
}
 
export default Checkout;