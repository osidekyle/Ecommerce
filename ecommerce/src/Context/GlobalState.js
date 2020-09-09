import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"


const initalState={
    items:[]
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


return (<GlobalContext.Provider value={{items:state.items,addItem, deleteItem}}>{children}</GlobalContext.Provider>)


}