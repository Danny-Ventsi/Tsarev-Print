import  logo from "../../static/imgs/logo.png"
import '../../static/stylesheets/navbar.css'
import '../../static/stylesheets/styles.css'
import Menu from "./Menu"
import {Link, BrowserRouter as Router} from "react-router-dom"
import {ReactComponent as Bag} from "../../static/imgs/bag.svg"
import {ReactComponent as Account} from "../../static/imgs/person.svg"
import {ReactComponent as Wishlist} from "../../static/imgs/heart.svg"
import "../../static/stylesheets/svg.css"
import DropdownLogin from "../Common/LoginModal"
import DropdownCart from "../Common/DropdownCart"
import "../../static/stylesheets/login-dropdown.css"
import "../../static/stylesheets/bag-dropdown.css"
import PageRoutes from "./PageRoutes.jsx"
import {ReactComponent as Logout} from "../../static/imgs/exit.svg"
import Footer from "../Common/Footer"

const NavBar = (props) =>
{
    if(props.numOfItemsInCart > 0)
    {
        document.getElementById("circle").style.display = "block"
        document.getElementById("displayNum").style.display = "block"
    }
    if(props.numOfItemsInCart >= 10)
    {
        document.getElementById("displayNum").style.right = "89px"
    }
    if(props.numOfItemsInCart >= 100)
    {
        document.getElementById("displayNum").style.right = "87px"
    }
    if(sessionStorage.getItem("token") === null || sessionStorage.getItem("token") === "")
    {
        return (
            <Router>
            <div className="nav">
                <Link to="/"><img src={logo} alt ="logo"/></Link>
                <Menu/>
                <div className="wrapper">
                <div id="circle"></div>
                <div id="displayNum">{props.numOfItemsInCart}</div>
                </div>
                <div className="bag-hover">
                    <Link to="/cart" state={{items:props.cartItems, price: props.price.toFixed(2)}}><Bag className="svg bag"/></Link>
                    <DropdownCart setPrice = {props.setPrice} numOfItemsInCart = {props.numOfItemsInCart} setNumOfItemsInCart = {props.setNumOfItemsInCart} price = {props.price.toFixed(2)} cartItems = {props.cartItems}/>
                </div>
                <Wishlist className="svg wishlist"/>
                <div className="login-hover">
                    <Link to="/login"><Account className="svg account"/></Link>
                    <DropdownLogin/>
                </div>
            </div>
            <PageRoutes/>
            <Footer/>
            </Router>
        );
    }
    else
    {
        if(props.numOfItemsInCart > 0)
        {
            document.getElementById("circle").style.display = "block"
            document.getElementById("displayNum").style.display = "block"
        }
        if(props.numOfItemsInCart >= 10)
        {
            document.getElementById("displayNum").style.right = "109px"
        }
        if(props.numOfItemsInCart >= 100)
        {
            document.getElementById("displayNum").style.right = "107px"
        }
        const logout = () =>
        {
            sessionStorage.setItem("token", "")
            document.location.reload()
        }
        return (
            <Router>
            <div className="nav">
                <Link to="/"><img src={logo} alt ="logo"/></Link>
                <Menu/>
                <div className="wrapper">
                <div style={{right:"105px"}} id="circle"></div>
                <div style={{right:"111px"}}  id="displayNum">{props.numOfItemsInCart}</div>
                </div>
                <div className="bag-hover">
                    <Link to="/cart" state={{items:props.cartItems, price: props.price.toFixed(2)}}><Bag style={{right:"108px"}} className="svg bag"/></Link>
                    <DropdownCart setPrice = {props.setPrice} numOfItemsInCart = {props.numOfItemsInCart} setNumOfItemsInCart = {props.setNumOfItemsInCart} price = {props.price.toFixed(2)} cartItems = {props.cartItems}/>
                </div>
                <Wishlist style={{right:"70px"}} className="svg wishlist"/>
                <div className="login-hover">
                    <Link to="/account"><Account style={{right:"38px"}} className="svg account"/></Link>
                </div>
                <Logout onClick={logout} style={{position:"absolute", right:"0px", top:"20px"}} className="svg"/>
            </div>
            <PageRoutes/>
            <Footer/>
            </Router>
        );
    }
}

export default NavBar