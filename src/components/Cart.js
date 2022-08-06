import { Link } from "react-router-dom";
import cart from "../images/shopping-cart-20391-32x32.ico"

export default function Cart() {
    return(
        <div className="cart-icon-container">
            <Link to={"/cart"}>
                <span className="cart-counter">0</span>
                <img className="cart-icon" src={cart} /> 
            </Link> 
            </div>



    )
}