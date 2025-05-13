import { useLoaderData } from "react-router-dom"
import { burgers } from "../../../data"
import ProductGridItem from "./ProductGridItem"
import { useEffect, useState } from "react"
import { updateQuantity, addToCart } from "../store/slices/cart"
const ProductGrid =({}) =>{
    const burgers = useLoaderData()
    return(
        <>
    <main>
        <div className="container">
            <div className="productGrid">
            {
                burgers.map((burger)=>{
                    return <ProductGridItem key={burger.id} data={burger}/>
                })
            }
            </div>
        </div>
    </main>
        </>
    )
}
export default ProductGrid