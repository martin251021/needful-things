import {Link} from "react-router-dom"

export default function OrderRecapItem({id, title, image, price}) {

    const styles = {
        textDecoration: "none",
        color: "black"
    }

    return(
        <div className="order-recap">
            <Link style={styles} to={`${id}`} target="_blank">
                <div className="order-recap-img-title">
                    <img className="order-recap-item-img" src={image}/>
                    <p className="order-recap-item-title">{`${title.slice(0,20)}...`}</p>
                </div>
            </Link>
            <p className="order-recap-item-price">{price} €</p>
        </div>
    )
}