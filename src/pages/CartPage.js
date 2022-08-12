import { useApp } from "../context/AppContext";
import CartItem from "../components/CartItem";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import trash from "../images/164909-photos-trash-png-free-photo_32x32.ico";
import DeleteModal from "../components/DeleteModal";


export default function CartPage() {

    const appContext = useApp()
    const navigate = useNavigate()

    const {itemsInCart, isDelModalActive, setItemsInCart, setBuyModalActive, setOverlayActive, setDelModalActive} = appContext

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

    const deleteSelected = () => {
        // setItemsInCart(prevState => prevState.filter(e => e.cartSelected === false))
        setDelModalActive(true)
        setOverlayActive(true)
    }


    return(
            <div className="cart-page-items-summary-container">
                <div className="cart-page-header">
                    <h2>Shopping Cart</h2>
                    {itemsInCart.length > 0 && 
                    <div className="cart-page-sel-del">
                        <label>
                        <input 
                            type="checkbox" 
                            value="allcartitems"
                            className="checkbox-input"
                            onChange={selectAllHandle}
                            checked={itemsInCart.map(e => e.cartSelected).every(e => e === true)}
                            />
                            Select All
                        </label>
                        <img className="cart-page-del" src={trash} onClick={deleteSelected}/>
                    </div>}
                </div>
                <div className="cart-page-items-container">
                    {itemsInCart.length > 0 ? itemsInCart.map((e,i) => 
                    <CartItem  key={i} {...e}/>
                    ) : <h3>I'm so empty 😢</h3>}
                </div>
                {itemsInCart.length > 0 && 
                <div className="cart-page-footer">
                    <div className="summary">
                        <h2>Total</h2>
                        <p className="total">{total} €</p>
                    </div>
                    <div className="cart-page-continue">
                        <button onClick={handleBackButton}>Back</button>
                        <button className="continue-btn">Continue</button>
                    </div>
                </div>}
                <div>
                    <DeleteModal />
                </div>
                <div onClick={() => {
                setDelModalActive(false)
                setOverlayActive(false)
                 }} className={isDelModalActive? "overlay" : "overlay hidden"}>
                </div>
            </div>

    )
}