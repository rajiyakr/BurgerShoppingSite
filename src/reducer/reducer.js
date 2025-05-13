export const initState ={
    cart:[],
    count:0,
    total:0
}
export const reducer = (state, action) => {
    switch(action.type){
        //toggling sidebar
        case "TOGGLE_SIDEBAR" : {
            return{...state, showSidebar: !state.showSidebar}
        }
        //adding product to cart
        case"ADD_TO_CART": {
            return{...state,cart:[...state.cart,action.payload]}
        }
        //increase quantity in cart
        case "INCREASE_QUANTITY": {
            let modifiedCart = state.cart.map(item => {
                if(item.id === action.payload){
                    return {...item, quantity: item.quantity + 1}
                }
                else{
                    return item
                }
            })
            return { ...state, cart:modifiedCart}
        }
        //decrese product quantity in cart
        case "DECREASE_QUANTITY": {
            let modifiedCart = state.cart.map(item => {
                if(item.id === action.payload){
                    return {...item, quantity: item.quantity - 1}
                }
                else{
                    return item
                }
            })
            return { ...state, cart:modifiedCart}
        }
        //delete item from cart
        case "DELETE_ITEM" : {
            let modifiedCart = state.cart.filter(item => item.id !== action.payload)
            return {...state, cart: modifiedCart}
        }
        case "UPDATE_COUNT_TOTAL" : {
            let count = state.cart.reduce((acc, curr) => acc + curr.quantity, 0)
            let total = state.cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0).toFixed(2)
            return {...state, count, total}
        }
        default: {
            return state
        }
    }
    return state
}
