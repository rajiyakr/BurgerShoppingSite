// import { useContext } from "react"
// import { AppContext } from "../context/context"
import CartItem from "../components/CartItem"
import { Format } from "../utils/Format"
import { useSelector } from "react-redux"
const Cart = () =>{
    const state = useSelector((state) =>state.cart)

    return(
        <>
        <div id="cartSection">
            <div className="container">
                <div className="cartPage">
                    <div className="cartPageTitle">
                        <h1> Your Cart</h1>
                    </div>
                    {
                        state.count > 0 ? (
                        <><div className="cartList">
                        {state.cart.map(item => {
                            return <CartItem key={item.id} data={item}/>
                        })}
                    </div>
                    <div className="cartFooter">
                        <div className="totalInfo">Total : {Format(state.total)}</div>
                        <span className="btn">Checkout</span>                    </div>
                    </>) : (<h2>No products in your cart. Add some</h2>
                   )
                    }
                    

                </div>
            </div>
        </div>
        
        </>
    )
}
export default Cart