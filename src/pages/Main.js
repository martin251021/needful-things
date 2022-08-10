import { useApp } from "../context/AppContext"

export default function Main() {

    const {isBuyModalActive} = useApp()

    return(
        <div>
            <h1>Main Page</h1>
            <div className={isBuyModalActive? "overlay" : "overlay hidden"}>
                
            </div>
        </div>
    )
}