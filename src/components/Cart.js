import { Link } from "react-router-dom"

export default function Cart() {
    return(
        <Link to={"/cart"}>
            <div>
                <p>small cart component</p>
            </div>
        </Link>

    )
}