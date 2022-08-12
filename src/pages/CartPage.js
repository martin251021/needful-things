import { useApp } from "../context/AppContext";
import CartItem from "../components/CartItem";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


export default function CartPage() {

    const appContext = useApp()
    const navigate = useNavigate()

    const {itemsInCart, setItemsInCart, setBuyModalActive, setOverlayActive} = appContext

    const total = itemsInCart.length > 0 ? itemsInCart.map(e => e.price * e.counter).reduce((a,e) => a + e).toFixed(2) : 0

    useEffect(() => {
        localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart))
    }, [itemsInCart])

    const handleBackButton = () => {
        navigate(-1)
        setBuyModalActive(false)
        setOverlayActive(false)
    }

    const selectAllHandle = () => {
        if(itemsInCart.map(e => e.cartSelected).every(e => e === true)) {
            setItemsInCart(prevState => prevState.map(e => ({...e, cartSelected: false})))
        } else if(itemsInCart.map(e => e.cartSelected).every(e => e === false)) {
            setItemsInCart(prevState => prevState.map(e => ({...e, cartSelected: true})))
        } else {
            setItemsInCart(prevState => prevState.map(e => ({...e, cartSelected: true})))
        }
    }


    return(
            <div className="cart-page-items-summary-container">
                <div className="cart-page-header">
                    <h2>Shopping Cart</h2>
                    <label>
                    <input 
                        type="checkbox" 
                        value="allcartitems"
                        onChange={selectAllHandle}
                        checked={itemsInCart.map(e => e.cartSelected).every(e => e === true)}
                        />
                        Select All
                    </label>
                </div>
                <div className="cart-page-items-container">
                    {itemsInCart.length > 0 ? itemsInCart.map((e,i) => 
                    <CartItem  key={i} {...e}/>
                    ) : <h1>Your cart is empty</h1>}
                </div>
                <div className="cart-page-footer">
                    <div className="summary">
                        <h2>Total</h2>
                        <p className="total">{total} €</p>
                    </div>
                    <div className="cart-page-continue">
                        <button onClick={handleBackButton}>Back</button>
                        <button className="continue-btn">Continue</button>
                    </div>
                </div>
            </div>

    )
}