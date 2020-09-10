import React,{useState, useContext, useEffect} from 'react';
import $ from "jquery"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome'
import '../../../node_modules/@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '../../../node_modules/@fortawesome/free-solid-svg-icons'
import Popper from "popper.js"
import {Link} from "react-router-dom"
import { GlobalContext } from '../Context/GlobalState';





const Nav = () => {
    const [numberOfItems,setNumberOfItems]=useState(0)
    const {items} = useContext(GlobalContext)
    
    useEffect(()=>{
        setNumberOfItems(items.length)
    })



    const navStuffStyle={
        color:"white",
        fontSize:"100%"
    }

    const brandStyle={
        color:"white",
        fontSize:"200%"
    }


    return ( 
            
        
        <nav className="navbar navbar-dark bg-dark navbar-inverse navbar-expand-lg navbar-fixed-top navbar-default">
            <div style={navStuffStyle} className="container-fluid">
                <div className="navbar-header">
                    <Link  className="nav-link" style={brandStyle} to="/">Brand Name</Link>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav nav mr-auto">
                <li  className="active  ml-3 nav-item"><Link to="/" className="nav-link" style={navStuffStyle}> Home</Link></li>
                <li className="nav-item ml-3 "><Link to="/products" className="nav-link" style={navStuffStyle}>Products</Link></li>
                <li className="nav-item ml-3 ">  <Link to="/about" className="nav-link" style={navStuffStyle}> About</Link></li>
                
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li><Link to="/cart" className="nav-link ml-3" style={navStuffStyle}>{numberOfItems}<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link></li>
                </ul>
                </div>

                
            </div>

        </nav>

     );
}
 
export default Nav;