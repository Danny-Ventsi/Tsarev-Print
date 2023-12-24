import '../../static/stylesheets/styles.css'
import '../../static/stylesheets/menu.css'
import {Link} from "react-router-dom"

const openNav = () =>
{

    document.getElementById("nav").style.height = "100%";
    document.getElementById("menu").style.display = "none"
}

function delay(time)
{
    return new Promise (resolve => setTimeout(resolve,time))
}

const closeNav = () =>
{
    document.getElementById("nav").style.height = "0%";
    delay(485).then(() => document.getElementById("menu").style.display = "block")
}

const Menu = () =>
{
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <nav className="overlay" id="nav">
                <a className="closeButton" onClick={closeNav}>&times;</a>
                <div className="overlay-content">
                    <Link onClick={closeNav} to="/">Home</Link>
                    <a href="#">About us</a>
                    <Link onClick={closeNav} to="/custom-print">Custom Print</Link>
                    <Link onClick={closeNav} to="/contact-us">Contact us</Link>
                    <Link onClick={closeNav} to="/order-status">Order Status</Link>
                </div>
            </nav>
            <div id="menu" onClick={openNav}><i className="fa fa-bars"></i></div>
        </div>
    )
}

export default Menu