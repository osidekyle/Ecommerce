import React, { useState, useEffect, useContext} from 'react';
import {GlobalContext} from "../Context/GlobalState"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome'
import '../../../node_modules/@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '../../../node_modules/@fortawesome/free-solid-svg-icons'


const ItemDetail = ({match}) => {
    
    const {addItem}=useContext(GlobalContext)

    const [item,setItem]=useState({});

    const getItem= async()=>{
        
        
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        console.log(match)
        
        let data= await fetch(`https://www.cheapshark.com/api/1.0/deals?title=${match.params.id}&limit=60&exact=0`, requestOptions)
       .catch(error=>console.log('error'))   
        let item=await data.json()
        console.log(item)
        
        for(let thing of item){
            if (thing.title==match.params.id){
                setItem(thing)
            }
        }
     
    }

    useEffect(()=>{
        getItem()


    },[])

    const addToCart=()=>{
        addItem(item);
        console.log("item added")
    }

    const buttonStyle={
        background:"#c2cee1",
       border:"#c2cee1"
    }

    const titleStyle={
        color: "#718db7",
        fontSize:"400%"
    }

    const moneyStyle={
        color:" #718db7",

    }

   

    const detailStyle={
        textAlign:"center"
    }
    return ( 
        
        <div className="container">
        <div className="row justify-content-center">
        <div style={detailStyle} className="detail col-xs-12">
        <h1 className="display-1" style={titleStyle}>{item.title}</h1>
        <img className="mt-3" src={item.thumb}></img>
        <h4 className="display-4 mt-3" style={moneyStyle}>${item.normalPrice}</h4>
        <button className="btn btn-warning mb-5 mt-3" style={buttonStyle} onClick={addToCart}>Add To Cart<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nibh ac ante mollis mattis sed sed sapien. In risus justo, hendrerit a congue eget, iaculis at ex. Sed quis volutpat quam, non viverra arcu. Cras vel eros sagittis, eleifend lectus in, semper diam. Nullam at odio convallis, ullamcorper augue quis, fringilla felis. Pellentesque elementum efficitur molestie. Sed imperdiet facilisis sem, at semper nisl pretium ut.</p>
        </div>
        </div>
        </div>
       
     );
}
 
export default ItemDetail;