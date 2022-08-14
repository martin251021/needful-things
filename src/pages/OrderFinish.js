import { useApp } from "../context/AppContext";
import React, {useState, useEffect} from "react";

export default function OrderFinish() {

    const appContext = useApp()
    const {itemsInCart} = appContext

    const [orderDetails, setOrderDetails] = useState(JSON.parse(localStorage.getItem("orderDetails")) || {
        delivery: "",
        payment: "",
        fullName: "",
        email: "",
        telNum: "",
        address: "",
        city: "",
        zipCode: ""
    })

    useEffect(() => {
        localStorage.setItem("orderDetails", JSON.stringify(orderDetails))
    },[orderDetails])

    const handleRadios = (e) => {
        const {name, value} = e.target
        console.log(e.target)
        setOrderDetails(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return(
        <div className="order-finish-container">
            <div className="order-delivery">
                <h3>Select a delivery method</h3>
                    <input 
                        type="radio" 
                        name="delivery" 
                        id="UPS" 
                        value="UPS" 
                        checked={orderDetails.delivery === "UPS"}
                        onChange={handleRadios}/> <label>UPS</label> <br />
                    <input 
                        type="radio" 
                        name="delivery" 
                        id="DPD" 
                        value="DPD" 
                        checked={orderDetails.delivery === "DPD"}
                        onChange={handleRadios}/> <label>DPD</label> <br />
                    <input 
                        type="radio" 
                        name="delivery" 
                        id="FedEx" 
                        value="FedEx" 
                        checked={orderDetails.delivery === "FedEx"}
                        onChange={handleRadios}/> <label>FedEx</label> <br />
            </div>
            <div className="order-payment">
                <h3>Select a payment method</h3>
                    <input 
                        type="radio" 
                        name="payment" 
                        id="credit-debit-card" 
                        value="credit-debit-card" 
                        checked={orderDetails.payment === "credit-debit-card"}
                        onChange={handleRadios}/> <label>Credit/debit card</label> <br />
                    <input 
                        type="radio" 
                        name="payment" 
                        id="apple-pay" 
                        value="apple-pay" 
                        checked={orderDetails.payment === "apple-pay"}
                        onChange={handleRadios}/> <label>Apple pay</label> <br />
                    <input 
                        type="radio" 
                        name="payment" 
                        id="google-pay" 
                        value="google-pay" 
                        checked={orderDetails.payment === "google-pay"}
                        onChange={handleRadios}/> <label>Google pay</label> <br />
                    <input 
                        type="radio" 
                        name="payment" 
                        id="paypal" 
                        value="paypal" 
                        checked={orderDetails.payment === "paypal"}
                        onChange={handleRadios}/> <label>Paypal</label> <br />
                    <input 
                        type="radio" 
                        name="payment" 
                        id="bank-transfer" 
                        value="bank-transfer" 
                        checked={orderDetails.payment === "bank-transfer"}
                        onChange={handleRadios}/> <label>Bank transfer</label> <br />
            </div>
            <div className="order-billing-address">
                <h3>Enter billing address</h3>
                <input type="text" placeholder="Full name" name="fullName" value={orderDetails.fullName} onChange={handleRadios}/> <br />
                <input type="text" placeholder="Address" name="address" value={orderDetails.address} onChange={handleRadios}/> <br />
                <input type="text" placeholder="City" name="city" value={orderDetails.city} onChange={handleRadios}/> <br />
                <input type="text" placeholder="Post code" name="zipCode" value={orderDetails.zipCode} onChange={handleRadios}/> <br />
                <input type="text" placeholder="Telephone number" name="telNum" value={orderDetails.telNum} onChange={handleRadios}/> <br />
                <input type="text" placeholder="E-mail" name="email" value={orderDetails.email} onChange={handleRadios}/> <br />
            </div>
        </div>
    )
}