import Footer from "../components/Footer"
import Header from "../components/Header"

const NotFound = () =>{
  return(
    <>
    <Header/>
    <div id="notFound">
        <div className="container">
            <div className="notFoundPage">
            <h1>Page not found</h1>
            <p>Go back to home</p>
            </div>
        </div>
    </div>
    
    <Footer/>
    </>
  )
}
export default NotFound