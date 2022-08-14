import { useApp } from "../context/AppContext";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import OrderRecapItem from "../components/OrderRecapItem";

export default function OrderFinish() {

    const appContext = useApp()
    const {itemsInCart} = appContext

    const navigate = useNavigate()

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

    const handleChanges = (e) => {
        const {name, value} = e.target
        console.log(e.target)
        setOrderDetails(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleBack = () => {
        navigate(-1)
    }

    return(
        <div className="order-finish-container">
            <div className="order-inputs">
                <div className="order-delivery">
                    <h3>Select a delivery method</h3>
                        <input 
                            type="radio" 
                            name="delivery" 
                            id="UPS" 
                            value="UPS" 
                            checked={orderDetails.delivery === "UPS"}
                            onChange={handleChanges}/> <label>UPS</label> <br />
                        <input 
                            type="radio" 
                            name="delivery" 
                            id="DPD" 
                            value="DPD" 
                            checked={orderDetails.delivery === "DPD"}
                            onChange={handleChanges}/> <label>DPD</label> <br />
                        <input 
                            type="radio" 
                            name="delivery" 
                            id="FedEx" 
                            value="FedEx" 
                            checked={orderDetails.delivery === "FedEx"}
                            onChange={handleChanges}/> <label>FedEx</label> <br />
                </div>
                <div className="order-payment">
                    <h3>Select a payment method</h3>
                        <input 
                            type="radio" 
                            name="payment" 
                            id="credit-debit-card" 
                            value="credit-debit-card" 
                            checked={orderDetails.payment === "credit-debit-card"}
                            onChange={handleChanges}/> <label>Credit/debit card</label> <br />
                        <input 
                            type="radio" 
                            name="payment" 
                            id="apple-pay" 
                            value="apple-pay" 
                            checked={orderDetails.payment === "apple-pay"}
                            onChange={handleChanges}/> <label>Apple pay</label> <br />
                        <input 
                            type="radio" 
                            name="payment" 
                            id="google-pay" 
                            value="google-pay" 
                            checked={orderDetails.payment === "google-pay"}
                            onChange={handleChanges}/> <label>Google pay</label> <br />
                        <input 
                            type="radio" 
                            name="payment" 
                            id="paypal" 
                            value="paypal" 
                            checked={orderDetails.payment === "paypal"}
                            onChange={handleChanges}/> <label>Paypal</label> <br />
                        <input 
                            type="radio" 
                            name="payment" 
                            id="bank-transfer" 
                            value="bank-transfer" 
                            checked={orderDetails.payment === "bank-transfer"}
                            onChange={handleChanges}/> <label>Bank transfer</label> <br />
                </div>
                <div className="order-billing-address">
                    <h3>Enter billing address</h3>
                    <input type="text" placeholder="Full name" name="fullName" value={orderDetails.fullName} onChange={handleChanges}/> <br />
                    <input type="text" placeholder="Address" name="address" value={orderDetails.address} onChange={handleChanges}/> <br />
                    <input type="text" placeholder="City" name="city" value={orderDetails.city} onChange={handleChanges}/> <br />
                    <input type="text" placeholder="Post code" name="zipCode" value={orderDetails.zipCode} onChange={handleChanges}/> <br />
                    <input type="text" placeholder="Telephone number" name="telNum" value={orderDetails.telNum} onChange={handleChanges}/> <br />
                    <input type="text" placeholder="E-mail" name="email" value={orderDetails.email} onChange={handleChanges}/> <br />
                </div>
                <div className="order-footer">
                    <button onClick={handleBack}>Back</button>
                    <button className="order-finish-btn">Finish order</button>
                </div>
            </div>
            <div className="order-recap-container">
                <div className="order-recap-container-item">
                    {itemsInCart.map(e => <OrderRecapItem key={e.id} {...e} />)}
                </div>
                {orderDetails.delivery && 
                <div className="order-recap-shipping">
                    <p>Shipping: </p> 
                    <p className="order-recap-shipping-child">{orderDetails.delivery}</p>
                </div>}
                {orderDetails.payment &&
                <div className="order-recap-payment">
                    <p>Payment:</p>
                    <p className="order-recap-payment-child">{orderDetails.payment}</p>
                </div>}
                <div className="order-recap-total">
                    <p>Total:</p>
                    <p className="order-recap-total-child">{itemsInCart.map(e => e.price).reduce((e,i) => e+i)} €</p>
                </div>
            </div>
        </div>
    )
}