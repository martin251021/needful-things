import { Link } from "react-router-dom";
import cart from "../images/shopping-cart-20391-32x32.ico";
import { useApp } from "../context/AppContext";

export default function Cart() {

    const appContext = useApp();
    const {itemsInCart, isMobile} = appContext;

    return(
        <div className="cart-icon-container">
            <Link to={"/cart"}>
                <span className={isMobile ? "cart-counter-mobile" : "cart-counter"}>{itemsInCart.length}</span>
                <img className={isMobile? "cart-icon-mobile" : "cart-icon"} src={cart} /> 
            </Link> 
            </div>



    )
}