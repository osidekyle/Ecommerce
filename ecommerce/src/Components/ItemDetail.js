import React, { useState, useEffect, useContext} from 'react';
import {GlobalContext} from "../Context/GlobalState"

const ItemDetail = ({match}) => {
    
    const {addItem}=useContext(GlobalContext)

    const [item,setItem]=useState({});

    const getItem= async()=>{
        
        
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        console.log(match)
        
        let data= await fetch(`https://www.cheapshark.com/api/1.0/games?title=${match.params.id}&limit=60&exact=0`, requestOptions)
       .catch(error=>console.log('error'))   
        let item=await data.json()
        console.log(item)
        
        setItem(item[0])
     
    }

    useEffect(()=>{
        getItem()


    },[])

    const addToCart=()=>{
        addItem(item);
        console.log("item added")
    }



    return ( 
        <React.Fragment>
        <h1>{item.external}</h1>
        <img src={item.thumb}></img>
        <h4>${item.gameID}</h4>
        <button className="btn btn-warning" onClick={addToCart}>Add To Cart</button>
        </React.Fragment>
     );
}
 
export default ItemDetail;