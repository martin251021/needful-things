import { Link } from "react-router-dom"
import Cart from "../components/Cart"

export default function Header() {

    const styles = {
        textDecoration: "none"
    }

    return( 
            <div className="header-container">
                <div className="header-title">
                    <Link style={styles} to={"/"} >
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