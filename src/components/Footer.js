import visa from "../images/visa.png";
import mastercard from "../images/mastercard.png";
import paypal from "../images/paypal.png";
import americanexpress from "../images/americanexpress.png";
import youtube from "../images/youtube.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate()

    const linkNav = () => {
        navigate("/")
    }

    return(
        <div className="footer">
            <h3 onClick={linkNav} className="footer-link">About us</h3>
            <h3 onClick={linkNav} className="footer-link">Contact</h3>
            <h3 onClick={linkNav} className="footer-link">Terms and Conditions</h3>
            <h3 onClick={linkNav} className="footer-link">Privacy Policy</h3>
            <h3 onClick={linkNav} className="footer-link">Delivery</h3>
             
            <img className="footer-icons" src={visa}/>
            <img className="footer-icons" src={mastercard}/>
            <img className="footer-icons" src={paypal}/>
            <img className="footer-icons" src={americanexpress}/>
            <a href="https://www.youtube.com/" target="_blank">
                <img className="footer-icons" src={youtube}/>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <img className="footer-icons" src={instagram}/>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
                <img className="footer-icons" src={facebook}/>
            </a>
        </div>
    )
}