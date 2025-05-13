import { FaSquarePlus } from "react-icons/fa6";
import { Format } from "../utils/Format"
import { FaSquareMinus } from "react-icons/fa6";
// import { useContext } from "react";
// import { AppContext } from "../context/context";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, deleteProduct } from "../store/slices/cart";
const CartItem = ({data}) =>{
    const {id, image, title, description,rating,price,reviews,quantity} = data
    // const {state, dispatch} = useContext(AppContext)
    const dispatch = useDispatch()
    const handleDecrease = () => {
      if(quantity>1){
          // dispatch({type:"DECREASE_QUANTITY", payload:id})
          dispatch(updateQuantity({id, num: -1}))
      }
    }
    
    return(
        <>
  <div className="cartItem">
    <img
      src={image}
      alt=""
      width="64"
      height="64"
    />
    <div className="cartContent">
      <h2>{title}</h2>
      <p>{Format(price)}</p>
      <div className="quantityControl">
        <span onClick={() =>  handleDecrease(id)}><FaSquareMinus size={18}/></span>
        <span>{quantity}</span>
        <span onClick={() => dispatch(updateQuantity({id, num: 1}))}><FaSquarePlus size={18}/></span>
      </div>
    </div>

     <div 
    //onClick={() => dispatch({type:"DELETE_ITEM",payload:id})}
    onClick={() => dispatch(deleteProduct(id))}
    style={{marginLeft:"auto"}}
    > 
      <img
        src="https://www.svgrepo.com/show/13658/error.svg"
        alt=""
        width="16"
      />
    </div>

    {/* <input className="cartInput" type="number" placeholder="2" min="0" /> */}
  </div>
 
  </>
    )
}
export default CartItem