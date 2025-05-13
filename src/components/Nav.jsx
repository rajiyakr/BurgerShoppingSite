// import { useContext } from "react"
// import { AppContext } from "../context/context"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
const Nav = () =>{
    // const {state,dispatch} = useContext(AppContext)
    // const handleSidebar = () => {
    //     dispatch({
    //         type:"TOGGLE_SIDEBAR"
    //     })
    // }
    const state = useSelector((state) => state.cart)
    console.log(state)
    return(
        <>
        <nav className="menu">
              {/* <div onClick={handleSidebar} className="menuItem cartOpen">Cart - {state.count}</div> */}
            <NavLink to="/cart" className="menuItem">Cart {state.count}</NavLink>
            <NavLink to="/about" className="menuItem">About</NavLink>
            </nav>
        </>
    )
}
export default Nav