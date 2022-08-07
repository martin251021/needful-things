import { Link, useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import { useApp } from "../context/AppContext";

export default function Header() {
    const appContext = useApp()
    const {searchQuery, setSearchQuery} = appContext
    const inputEl = document.querySelector(".search-bar")

    const styles = {
        textDecoration: "none"
    }

    const navigate = useNavigate()
    const searchButtonHandler = function() {
        navigate("/search");
    }

    const searchQueryHandler = function(e) {
        setSearchQuery(e.target.value)
    }

    const handleEnter = function(e) {
        if(e.key === "Enter") {
            setSearchQuery(inputEl.value)
            navigate("/search")
        }
    }

    return( 
            <div className="header-container">
                <div className="header-title">
                    <Link style={styles} to={"/"} >
                        <h1>Needful Things</h1>
                    </Link>
                </div>
                <input 
                    className="search-bar" 
                    placeholder="Search for a product"
                    onChange={searchQueryHandler}
                    value={searchQuery}
                    onKeyDown={handleEnter}
                    />
                <button 
                    onClick={searchButtonHandler} 
                    className="search-button"
                    >Search</button>
                <div className="header-cart">
                        <Cart/>
                </div>
            </div>
        

    )
}