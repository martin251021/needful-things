import { useApp } from "../context/AppContext"

export default function BuyModal() {

    const {isBuyModalActive, isOverlayActive, setBuyModalActive, setOverlayActive} = useApp()

    const hideModal = () => {
        setBuyModalActive(false)
        setOverlayActive(false)
    }

    return(
        <div className={isBuyModalActive ? "modal" : "modal hidden"}>
            <p>Youve added item to your cart.</p>
            <button onClick={hideModal}>Back</button>
            <button>Continue to cart</button>
        </div>
    )
}