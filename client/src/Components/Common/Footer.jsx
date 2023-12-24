import {ReactComponent as Instagram} from "../../static/imgs/instagram.svg"
import {ReactComponent as TikTok} from "../../static/imgs/tiktok.svg"
import {ReactComponent as Facebook} from "../../static/imgs/facebook.svg"
import { Link } from "react-router-dom"
import "../../static/stylesheets/styles.css"
import "../../static/stylesheets/footer.css"

const Footer = () =>
{
    return(
        <div className="footer">
            <div id="services" className="inline">
                <h2>Services: </h2>
                <Link to="/order-status"><p>Order Status</p></Link>
                <Link to="/custom-print"><p>Custom Print</p></Link>
            </div>
            <div id="orders" className="inline">
                <h2>Orders and Delivery: </h2>
                    <p>FAQ</p>
            </div>
            <div id="contactUs" className="inline">
                <h2>Contact us: </h2>
                    <Link to="/contact-us"><p>Contact</p></Link>
            </div>
            <div id="socialMedia" className="inline">
                <h2>Social Media: </h2>
                <a href="https://www.instagram.com/tsarevprint/" rel="noreferrer" target="_blank"><Instagram id="ig" className="svg"/></a>
                <Facebook id="fb" className="svg"/>
                <TikTok id="tt" className="svg"/>
                <p style={{visibility:"hidden"}}>o</p>
            </div>
        </div>
    )
}

export default Footer