import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import React, {useEffect} from "react";

export default function CartItem({title, price, description, category, image, rating, id, counter, cartSelected}) {

    const appContext = useApp()
    const {itemsInCart, setItemsInCart} = appContext

    const increaseQty = (e) => {
        const id = Number(e.target.parentNode.parentNode.id)
        setItemsInCart(prevState => prevState.map(e => e.id === id? {...e, counter: e.counter + 1} : e))
    }

    const decreaseQty = (e) => {
        const id = Number(e.target.parentNode.parentNode.id)
        if(itemsInCart.find(e => e.id === id).counter === 1) {
            setItemsInCart(prevState => prevState.filter(e => e.id !== id))
        } else {
            setItemsInCart(prevState => prevState.map(e => e.id === id ? {...e, counter: e.counter - 1} : e))
        }
    }

    const inputHandleOnChange = (el) => {
        const id = Number(el.target.parentNode.parentNode.id)
        if(el.target.value <= 0) {
            alert("This action will remove your item from cart.")
            setItemsInCart(prevState => prevState.filter(e => e.id !== id))
        } else {
            setItemsInCart(prevState => prevState.map(e => e.id === id ? {...e, counter: Number(el.target.value.replace(/\D/g, ""))} : e))
        }
    }

    useEffect(() => {
        localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart))
    }, [itemsInCart])

    const checkBoxHandle = (e) => {
        const id = Number( e.target.parentNode.id)
        console.log(id)
        setItemsInCart(prevState => prevState.map(e => e.id === id? {...e, cartSelected: !e.cartSelected} : e))
    }

    const styles = {
        textDecoration: "none",
        color: "black"
    }


    return(
        <div id={id} className="cart-item-container">
            <input 
                className="checkbox-input" 
                type="checkbox" 
                value="cartitem"
                onChange={checkBoxHandle}
                checked={cartSelected}
                />
            <Link style={styles} to={`${id}`} target="_blank">
            <div className="cart-item-img-title">
                <img className="cart-item-img" src={image} />
                <p  className="cart-item-title">{`${title.slice(0,20)}...`}</p>
            </div>
            </Link>
            <p className="cart-item-price">{price}€/pc</p>
            <div className="cart-item-modify">
                <input onChange={inputHandleOnChange} className="cart-item-input" value={counter}/>
                <button className="cart-item-increase" onClick={increaseQty}>+</button>
                <button className="cart-item-decrease" onClick={decreaseQty}>-</button>
            </div>
            <p className="cart-total-per-item">{counter * price}€</p>
        </div>
    )
}