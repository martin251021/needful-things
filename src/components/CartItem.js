import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function CartItem({title, price, description, category, image, rating, id, counter}) {

    const appContext = useApp()
    const {itemsInCart, setItemsInCart} = appContext

    const increaseQty = (e) => {
        const id = e.target.parentNode.id
        setItemsInCart(prevState => prevState.map(e => e.id === Number(id)? {...e, counter: e.counter + 1} : e))
    }


    const decreaseQty = (e) => {
        const id = Number(e.target.parentNode.id)
        if(itemsInCart.find(e => e.id === id).counter === 1) {
            setItemsInCart(prevState => prevState.filter(e => e.id !== id))
        } else {
            setItemsInCart(prevState => prevState.map(e => e.id === id ? {...e, counter: e.counter - 1} : e))
        }
    }

    return(
        <div id={id} className="cart-item-container">
            <Link to={`${id}`}>
            <div className="cart-item-img-title">
                <img className="cart-item-img" src={image} />
                <p className="cart-item-title">{title}</p>
            </div>
            </Link>
            <p>{counter} pcs</p>
            <p className="cart-item-price">{price}$</p>
            <button onClick={increaseQty}>+</button>
            <button onClick={decreaseQty}>-</button>
        </div>
    )
}