import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProductGrid from "./components/ProductGrid"
import Sidebar from "./components/Sidebar"
import { useContext } from "react"
import { AppContext } from "./context/context"
import { Outlet } from "react-router-dom"
const App = () =>{
  // const {state} = useContext(AppContext)

  return( 
    <>
    <div id="app">
    <Header />
    <Outlet/>
    <Footer/>
    {/* {state.showSidebar && <Sidebar />} */}
  </div>
  </>
  )
 
}
export default App