import { Link } from "react-router-dom"

export default function Product({title, image, id}) {

    const styles = {
        textDecoration: "none",
        color: "black"
    }

    return(
        <Link style={styles} to={`/search/${id}`} target="_blank">
        <div className="product">
            <p>{title}</p>
            <img className="product-img" src={image}/>
        </div>
        </Link>

    )
}