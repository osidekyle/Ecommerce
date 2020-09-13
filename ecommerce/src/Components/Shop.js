import React, { useEffect, useState, useRef} from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Link} from "react-router-dom"
import "../../src/App.css"
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome'
import '../../../node_modules/@fortawesome/fontawesome-svg-core'
import { faSearch } from '../../../node_modules/@fortawesome/free-solid-svg-icons'
import "../../src/App.css"

const Shop = () => {
    let text=useRef(null)

    const [items,setItems]=useState([]);
    const [search, setSearch]= useState("batman")

    const getItems= async()=>{
        var formdata = new FormData();

        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        await fetch(`https://www.cheapshark.com/api/1.0/games?title=${search}&limit=60&exact=0`, requestOptions)
          .then(response => response.json())
          .then(result => setItems(result))
          //.then(result=>console.log(result))
          .catch(error => console.log('error', error));

          
    }

    useEffect(()=>{
        getItems()


    },[])
    const lowHigh=()=>{
        let newItems=items.slice()
        newItems.sort((a,b)=>(a.gameID-b.gameID))
        setItems(newItems)
    }
    const highLow=()=>{
        let newItems=items.slice()
        newItems.sort((a,b)=>(b.gameID-a.gameID))
        setItems(newItems)
    }

    const changed=(e)=>{
        
        if(e.target.options[1].selected==true){
        
            lowHigh()
        }
        else if(e.target.options[2].selected==true){
        
            highLow()
        }
        else if(e.target.options[0].selected==true){
        
            getItems()
        }
    }
   
    const addSearch = (e)=>{
        console.log("search")
        console.log(e.target.value)
        setSearch(e.target.value)
    }


    const checkKey=(event)=>{
        if(event.key==="Enter")
        {
                getItems();
        }
    }

    const imgStyle={
        maxHeight:"150px",
        minHeight:"100%",
        maxWidth:"95%",
        width:"auto"
        
    }


    const itemStyle={
       textAlign:"center",
        borderRadius:"15px",
        position:"relative",
        background:"white",
        maxWidth:"40%"
        
    }

const spanStyle={
    
    }

    const innerStyle={
        
        fontSize:"100%"
    }

   const buttonStyle={
        position:"absolute",
        bottom:"0%",
        left:"0%",
       width:"100%",
       background:"#c2cee1",
       border:"#c2cee1"
   }

   const topStyle={
       textAlign:"center",
       color:"white",
       
       fontSize:"500%"
   }


   const searchStyle={
    border:"none",
    height:"32px",
    width:"70%",
    borderRadius:"5px",

   }

   const searchButtonStyle={
    background:"#c2cee1",
    border:"#c2cee1",
    marginBottom:".5%",
    
    
    
   }
   const searchsStyle={
      textAlign:"center"
   }
   const sortingStyle={
       textAlign:"center"
   }

   const inputStyle={
       color:"white",
   }

   const optionStyle={
     
   }

   const selectStyle={
     
    width:"65%"
   }

   const sortStyle={
    fontSize:"150%"
   }
    return ( 
        <div className="container" >
           <div >
            <h1  className="shoptitle">Products</h1>
                <div className="row mt-5 justify-content-end" style={inputStyle}>
                    
                    <div style={searchsStyle} className="col-sm-6 col-md-6 col-xs-8">
                <input type="text" className="searchBar"  onKeyPress={checkKey} onChange={addSearch}></input>
                <button style={searchButtonStyle}   className="btn  btn-secondary" onClick={()=>getItems()}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                </div>
                <div  className="col-sm-3 col-md-3 col-xs-4">
                <div className="row options" style={optionStyle}>
                    <h4 style={sortStyle} className="display-4">Sort by:</h4>
                <select className=" ml-1 custom-select" style={selectStyle} onChange={changed}>
                    <option>Relevance</option>
                    <option >Price Low-High</option>
                    <option>Price High-Low</option>

                </select>
                </div>
                </div>
                </div>
            </div>
            <div className="row justify-content-center mb-5 mt-5">
            {items.map((item)=>(
                <div className="mt-5 mr-3 ml-3 col-xs-1 col-sm-3 item col-md-3" style={itemStyle}>
                <div  style={spanStyle} className="mt-4 mb-5">
                <img src={item.thumb} style={imgStyle}></img>
                <span style={innerStyle} >
                <p>{item.external}</p>
                <p>${item.gameID}</p>
                
                </span>
                </div>
                <Link  to={`/products/${item.external }`}><button style={buttonStyle}  className="btn details btn-success">Details</button></Link>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default Shop;