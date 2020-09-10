import React, { useEffect, useState, useRef} from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Link} from "react-router-dom"

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
    const productStyle={
        width:"2%",
        height:"50%"
    }
   
    const addSearch = (e)=>{
        console.log("search")
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return ( 
        <div >
           
            <h1>Products</h1>
            <div className="search-area">
                <input type="text" onChange={addSearch}></input>
                <button className="btn btn-secondary" onClick={()=>getItems()}>Search</button>
            </div>
            <div className=" mt-5">
            {items.map((item)=>(
                <div className="mt-5" style={productStyle}>
                <div className="row">
                <img src={item.thumb}></img>
                </div>
                <div className="row">
                <h1>{item.external}</h1>
                </div>
                <div className="row">
                <h1>${item.gameID}</h1>
                </div>
               
                <div className="row">
                <Link to={`/products/${item.external }`}><button className="btn btn-success">Details</button></Link>
                </div>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default Shop;