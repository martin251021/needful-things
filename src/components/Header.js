import { Link } from "react-router-dom"
import Cart from "../components/Cart"

export default function Header() {

    const styles = {
        textDecoration: "none"
    }

    return(
            <div className="header-container">
                <div >
                    <Link style={styles} to={"/"} className="header-title">
                        <h1>Needful Things</h1>
                    </Link>
                </div>
                <input className="search-bar" placeholder="Search for a product"/>
                <button className="search-button">Search</button>
                <div className="header-cart">
                        <Cart/>
                </div>
            </div>
        

    )
}