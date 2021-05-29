
const initialState = {
    cartList : []
}
const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART_LIST': {
            const newState ={
                ...state, cartList: [...state.cartList, action.payload]
            }
            return newState
        }
        case 'REMOVE_FROM_CART_LIST' :{
            const newState ={
                ...state, cartList: state.cartList.filter(b => b !== action.payload)
            }
            return newState
        }
        default :{
            return state
        }
    }
}
export default cartReducer;