import { Link } from "react-router-dom"

export default function Product({title, price, description, category, image, rating, id}) {

    const styles = {
        textDecoration: "none",
        color: "black"
    }

    return(
        <Link style={styles} to={`/search/${id}`}>
        <div className="product">
            <p>{title}</p>
            <img className="product-img" src={image}/>
        </div>
        </Link>

    )
}