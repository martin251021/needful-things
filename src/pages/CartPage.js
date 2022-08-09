import { useApp } from "../context/AppContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import React, {useEffect} from "react";


export default function CartPage() {

    const appContext = useApp()
    const {itemsInCart} = appContext

    const total = itemsInCart.length > 0 ? itemsInCart.map(e => e.price * e.counter).reduce((a,e) => a + e).toFixed(2) : 0

    return(
            <div className="cart-page-items-summary-container">
                <div className="cart-page-items-container">
                    {itemsInCart.length > 0 ? itemsInCart.map((e,i) => 
                    <CartItem  key={i} {...e}/>
                    ) : <h1>Your cart is empty</h1>}
                </div>
                <div className="summary">
                    <h2>Total</h2>
                    <p className="total">{total} €</p>
                </div>
                <div className="cart-page-continue">
                    <button>Back</button>
                    <button className="continue-btn">Continue</button>
                </div>
            </div>

    )
}