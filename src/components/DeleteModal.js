import { useApp } from "../context/AppContext";

export default function DeleteModal() {

    const appContext = useApp();
    const {isDelModalActive, isOverlayActive, setDelModalActive, setOverlayActive, setItemsInCart} = appContext

    const hideModal = () => {
        setDelModalActive(false)
        setOverlayActive(false)
    }
    
    const removeHandle = () => {
        setItemsInCart(prevState => prevState.filter(e => e.cartSelected === false))
        hideModal()
    }

    return(
        <div className={isDelModalActive ? "modal" : "modal hidden"}>
            <p>Do you really wish to remove selected items from shopping cart?</p>
            <button className="modal-back" onClick={hideModal}>Back</button>
            <button className="modal-continue" onClick={removeHandle}>Remove</button>
        </div>
    )
}