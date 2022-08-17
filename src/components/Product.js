import { Link } from "react-router-dom"

export default function Product({title, price, description, category, image, rating, id}) {
    return(
        <Link to={`/search/${id}`}>
        <div className="product">
            <p>{title}</p>
            <img className="product-img" src={image}/>
        </div>
        </Link>

    )
}