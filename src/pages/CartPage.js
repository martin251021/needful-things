import { useApp } from "../context/AppContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


export default function CartPage() {

    const appContext = useApp()
    const {itemsInCart} = appContext

    return(
            <div>
                <div>
                    {itemsInCart.length > 0 ? itemsInCart.map((e,i) => 
                    <CartItem  key={i} {...e}/>
                    ) : <h1>Your cart is empty</h1>}
                </div>
                <div className="summary">
                    <h2>Total</h2>
                    <p className="total">12$</p>
                </div>
            </div>

    )
}