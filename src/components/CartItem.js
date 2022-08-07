import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function CartItem({title, price, description, category, image, rating, id, counter}) {

    const appContext = useApp()
    const {itemsInCart} = appContext

    return(
        <div className="cart-item-container">
            <Link to={`${id}`}>
            <div className="cart-item-img-title">
                <img className="cart-item-img" src={image} />
                <p className="cart-item-title">{title}</p>
            </div>
            </Link>
            <p>{counter} pcs</p>
            <p className="cart-item-price">{price}$</p>
        </div>
    )
}