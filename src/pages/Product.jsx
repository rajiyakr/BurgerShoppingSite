import { useLoaderData } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { Format } from "../utils/Format"
import { useSelector, useDispatch } from "react-redux"


const Product = () =>{


    const data = useLoaderData()

    const {id, title, description, image, price, reviews, rating} = data
    
    const state = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const selectedId = state.id
    
    const itemInCart = state.cart.findIndex(item => item.id === id)

    const addCartItem = (productObject) =>{
      if(itemInCart > -1){
       
        dispatch(updateQuantity({id, num: 1}))
      }
      else{ 
       
        dispatch(addToCart({...productObject, quantity:1}))
    }
       
      }
    return(
        <>
        <div id="productSection">
            <div className="container">
                <div className="produtPage">
                    <div className="productContent">
                        <div className="productImg">
                           <img src={image} alt=""/>
                        </div>
                        <div className="productInfo">
                           <h1>{title}</h1>
                           <div className="rating">
                           <FaStar color="#F59E0B"/>
                           <span>{rating}</span>
                           </div>
                           <div>
                            <p>{description}</p>
                            <div className="itemPrice">{Format(price)}</div>
                            <div onClick={() => addCartItem(data)} className="btn">{ itemInCart > -1 ? "Added" : "Add"} to Cart 
                            </div>
                           </div>
                        </div>
                        <div className="productReviews">
                          <h2>Burger reviews</h2>
                        {
                        burgers.map((item, a)=>
                        item.id === id ? item.reviews.map((review, b) => 
                        <div className="reviewBox" key = {b}>
                          <p><strong>{review.username}</strong> : {review.content}</p>
                        </div>
                        ) : null
                        ) 
                        }                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Product

export const productLoader = async ({ params }) => {
    const { ID } = params;
    let res = await fetch(`https://burgermantri.onrender.com/data/${ID}`);
    return res;
  };