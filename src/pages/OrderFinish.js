import { useApp } from "../context/AppContext";
import React, {useState, useEffect} from "react";

export default function OrderFinish() {

    const appContext = useApp()
    const {itemsInCart} = appContext

    const [orderDetails, setOrderDetails] = useState(JSON.parse(localStorage.getItem("orderDetails")))

    return(
        <div className="order-finish-container">
            <div className="order-delivery">
                <h3>Select a delivery method</h3>
                <label>
                    <input type="radio"/> UPS
                    <input type="radio"/> FedEx
                    <input type="radio"/> DPD
                </label>
            </div>
        </div>
    )
}