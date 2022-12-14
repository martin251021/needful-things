import { Link, useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import { useApp } from "../context/AppContext";

export default function Header() {
    const appContext = useApp()
    const {searchQuery, setSearchQuery, isMobile} = appContext
    const inputEl = document.querySelector(".search-bar")

    const styles = {
        textDecoration: "none"
    }

    const titleStyles = {
        fontSize: isMobile ? "0.8rem" : "1.4rem"
    }

    const searchBarStyles = {
        width: isMobile ? "68%" : "40%",
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
            <div className={isMobile ? "header-container-mobile" : "header-container"}>
                <Link style={styles} to={"/"} >
                    <div style={titleStyles} className="header-title">
                             <h2>Needful Things</h2>
                    </div>
                </Link>
                <div className="header-search">
                    <input
                        style={searchBarStyles} 
                        className="search-bar" 
                        placeholder="Search for a product"
                        onChange={searchQueryHandler}
                        value={searchQuery}
                        onKeyDown={handleEnter}
                        />
                    <button 
                        onClick={searchButtonHandler} 
                        className="search-button"
                        >Search
                    </button>
                </div>
                <div className="header-cart">
                        <Cart/>
                </div>
            </div>
        

    )
}