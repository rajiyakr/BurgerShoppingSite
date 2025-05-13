import React from "react"
import Nav from "./Nav"
import { NavLink } from "react-router-dom"
const Header = ({}) =>{
    return(
        <> 
    <header id="headerSection"></header>
    <div className="container">
    <div className="header">
            <div className="logo">
              <NavLink to="/"><h2>BurgerMantri</h2></NavLink>
              
            </div>
            <Nav  count/>
          </div>
    </div>
    </>
    )
}
export default Header