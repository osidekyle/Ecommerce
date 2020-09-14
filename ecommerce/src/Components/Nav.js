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
        fontSize:"60%"
    }

    const brandStyle={
        color:"white",
        fontSize:"700%"
    }
    const cartStyle={
        fontSize:"300%",
        color:"white"
    }

    const navStyle={
       background:" #718db7",
       opacity:"0.9",
       clipPath: "polygon( 0 0%,100% 0,100% 85%,0 100%"
    }
    return ( 
            
        
        <nav style={navStyle} className="navbar navbar-light navbar-inverse navbar-expand-lg fixed-top navbar-default">
            <div style={navStuffStyle} className="container-fluid">
                <div className="navbar-header">
                    <Link  className="nav-link display-1" style={brandStyle} to="/">Gamez</Link>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav nav mr-auto">
                <li data-toggle="collapse" data-target=".navbar-collapse" className="active page display-4 ml-5 nav-item"><Link to="/" className="nav-link " style={navStuffStyle}> Home</Link></li>
                <li data-toggle="collapse" data-target=".navbar-collapse" className="nav-item page  display-4 ml-5 "><Link to="/products" className="nav-link" style={navStuffStyle}>Products</Link></li>
                <li data-toggle="collapse" data-target=".navbar-collapse" className="nav-item page  display-4  ml-5 ">  <Link to="/about" className="nav-link" style={navStuffStyle}> About</Link></li>
                
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li data-toggle="collapse" data-target=".navbar-collapse"><Link to="/cart" className="nav-link cart ml-5" style={cartStyle}>{numberOfItems}<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link></li>
                </ul>
                </div>

                
            </div>

        </nav>

     );
}
 
export default Nav;