export default (state, action) =>{
    switch(action.type){
        case "DELETE_ITEM":
            return {
                ...state,items:state.items.filter(item=>(item.gameID!==action.payload))
            }

        case "ADD_ITEM":
            return{
                ...state,items: [action.payload,...state.items]
            }
        case "EMPTY":
            return{
                ...state,items: []
            }
        case "SET_CHECKOUTS":
            return{
                ...state,checkouts: [...state.items]
            }
        default:
            return state;
    }
}