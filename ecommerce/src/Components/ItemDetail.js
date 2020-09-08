import React, { useState, useEffect} from 'react';


const ItemDetail = ({match}) => {
    

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




    return ( 
        <React.Fragment>
        <h1>{item.external}</h1>
        <img src={item.thumb}></img>
        <button className="btn btn-warning">Add To Cart</button>
        </React.Fragment>
     );
}
 
export default ItemDetail;