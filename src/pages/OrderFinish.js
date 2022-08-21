import { useApp } from "../context/AppContext";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import OrderRecapItem from "../components/OrderRecapItem";

export default function OrderFinish() {

    const appContext = useApp()
    const {itemsInCart, setItemsInCart} = appContext

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

    const [inputAlert, setInputAlert] = useState(false)

    useEffect(() => {
        localStorage.setItem("orderDetails", JSON.stringify(orderDetails))
    },[orderDetails])

    useEffect(() => {
        if(Object.values(orderDetails).every(e => e.length > 0)) setInputAlert(false)
    },[orderDetails])

    const handleChanges = (e) => {
        const {name, value} = e.target
        setOrderDetails(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleBack = () => {
        navigate(-1)
    }

    const handleFinish = () => {
        if(Object.values(orderDetails).every(e => e.length > 0)) {
            localStorage.clear()
            setItemsInCart([])
            setOrderDetails({})
            navigate("/ordered")
        } else {
            setInputAlert(true)
        }
    }

    console.log(itemsInCart)

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
                            id="Credit/debit card" 
                            value="Credit/debit card" 
                            checked={orderDetails.payment === "Credit/debit card"}
                            onChange={handleChanges}/> <label>Credit/debit card</label> <br />
                        <input 
                            type="radio" 
                            name="payment" 
                            id="Apple pay" 
                            value="Apple pay" 
                            checked={orderDetails.payment === "Apple pay"}
                            onChange={handleChanges}/> <label>Apple pay</label> <br />
                        <input 
                            type="radio" 
                            name="payment" 
                            id="Google pay" 
                            value="Google pay" 
                            checked={orderDetails.payment === "Google pay"}
                            onChange={handleChanges}/> <label>Google pay</label> <br />
                        <input 
                            type="radio" 
                            name="payment" 
                            id="Paypal" 
                            value="Paypal" 
                            checked={orderDetails.payment === "Paypal"}
                            onChange={handleChanges}/> <label>Paypal</label> <br />
                        <input 
                            type="radio" 
                            name="payment" 
                            id="Bank transfer" 
                            value="Bank transfer" 
                            checked={orderDetails.payment === "Bank transfer"}
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
                <div className="order-alert">
                    {inputAlert && <h3>Please fill in all the information.</h3>}
                </div>
                <div className="order-footer">
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleFinish} className="order-finish-btn">Finish order</button>
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
                    <p className="order-recap-total-child">{(itemsInCart.map(e => e.price * e.counter).reduce((e,i) => e+i,0)).toLocaleString("cz-CZ")} €</p>
                </div>
            </div>
        </div>
    )
}