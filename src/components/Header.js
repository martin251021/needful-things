import { Link } from "react-router-dom"
import Cart from "../components/Cart"

export default function Header() {
    return(
            <div className="header-container">
                <div >
                    <Link to={"/"} className="header-title">
                        <h1>Needful Things</h1>
                    </Link>
                </div>
                <div className="header-cart">
                        <Cart/>
                </div>
            </div>
        

    )
}