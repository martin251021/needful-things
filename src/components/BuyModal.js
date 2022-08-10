import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function BuyModal() {

    const {isBuyModalActive, isOverlayActive, setBuyModalActive, setOverlayActive} = useApp()

    const hideModal = () => {
        setBuyModalActive(false)
        setOverlayActive(false)
    }

    const navigate = useNavigate()
    const handleContinue =() => {
        setBuyModalActive(false)
        setOverlayActive(false)
        navigate("/cart")
    }

    return(
        <div className={isBuyModalActive ? "modal" : "modal hidden"}>
            <p>Youve added item to your cart.</p>
            <button className="modal-back" onClick={hideModal}>Back</button>
            <button className="modal-continue" onClick={handleContinue}>Continue to cart</button>
        </div>
    )
}