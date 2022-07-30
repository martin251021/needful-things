import {Outlet} from "react-router-dom"
import Footer from "../components/Footer"

export default function SharedFooter() {
    return(
        <div>
            <Footer/>
                <Outlet/>
        </div>
    )
}