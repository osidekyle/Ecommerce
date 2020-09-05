import React from 'react';
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"


const Nav = () => {
    return ( 
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Brand Name</a>
                </div>

                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li ><a href="#">Products</a></li>
                    <li ><a href="#">About</a></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><i className="fas fa-shopping-cart">Cart</i></a></li>
                </ul>
            </div>

        </nav>

     );
}
 
export default Nav;