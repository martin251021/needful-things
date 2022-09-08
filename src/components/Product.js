import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Product({title, image, id}) {

    const appContext = useApp()
    const {isMobile} = appContext

    const styles = {
        textDecoration: "none",
        color: "black"
    }

    return(
        <Link style={styles} to={`/search/${id}`} target="_blank">
        <div className={isMobile? "product-mobile" : "product"}>
            <p className={isMobile? "product-title-mobile" : "product-title"}>{title}</p>
            <img className={isMobile? "product-img-mobile" : "product-img"} src={image}/>
        </div>
        </Link>

    )
}