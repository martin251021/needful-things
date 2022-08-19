import visa from "../images/visa.png";
import mastercard from "../images/mastercard.png";
import paypal from "../images/paypal.png";
import americanexpress from "../images/americanexpress.png";
import youtube from "../images/youtube.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";

export default function Footer() {
    return(
        <div className="footer">
            <h3>About us</h3>
            <h3>Contact</h3>
            <h3>Terms and Conditions</h3>
            <h3>Privacy Policy</h3>
            <h3>Delivery</h3>
            <img className="footer-icons" src={visa}/>
            <img className="footer-icons" src={mastercard}/>
            <img className="footer-icons" src={paypal}/>
            <img className="footer-icons" src={americanexpress}/>
            <img className="footer-icons" src={youtube}/>
            <img className="footer-icons" src={instagram}/>
            <img className="footer-icons" src={facebook}/>
        </div>
    )
}