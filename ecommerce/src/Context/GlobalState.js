import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"


const initalState={
    items:[],
    checkouts:[]
}


export const GlobalContext = createContext(initalState);


export const GlobalProvider=({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initalState);

    const addItem=(item)=>{
        dispatch({
            type:"ADD_ITEM",
            payload:item
        })
    }
    const deleteItem=(id)=>{
        dispatch({
            type:"DELETE_ITEM",
            payload:id
        })
    }
    const empty=()=>{
        dispatch({
            type:"EMPTY"
        })
    }
    const setCheckouts=()=>{
        dispatch({
            type:"SET_CHECKOUTS"
        })
    }


return (<GlobalContext.Provider value={{items:state.items,checkouts:state.checkouts,setCheckouts,addItem, deleteItem, empty}}>{children}</GlobalContext.Provider>)


}