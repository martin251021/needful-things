import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { useApp } from "../context/AppContext";
import BuyModal from "../components/BuyModal";

export default function SingleProduct() {

    const {id} = useParams()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const appContext = useApp()
    const {itemsInCart, setItemsInCart,setBuyModalActive, setOverlayActive} = appContext

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            setError(false)
            try {
                const response = await axios(`https://fakestoreapi.com/products/${id}`)
                setData(response.data)
                setLoading(false)
            } catch(err) {
                setError(true);
                console.log(err)
            }
        }
        fetchData()
    }, [id])

    useEffect(() => {
        localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart))
    }, [itemsInCart])

    const addToCartHandle = () => {
        if(itemsInCart.map(e => e.id).includes(data.id)) {
            setItemsInCart(prevState => prevState.map(e => {
                if(e.id === data.id) {
                    return {...e, counter: e.counter + 1}
                } else {
                    return e
                }
            }))
        } else {
            setItemsInCart(prevState => [...prevState, {
                ...data,
                counter: 1
            }])
        }
        setBuyModalActive(true)
        setOverlayActive(true)
    }


    return(
        <div >
            {loading? <LoadingSpinner/>:
            <div className="singleproduct">
                <img className="singleproduct-image" src={data.image} />
                <div className="singleproduct-info">
                    <h4>{data.title}</h4>
                    <p>{`${data.price} €`}</p>
                    <p>{data.description}</p>
                    <button onClick={addToCartHandle}>Add to cart</button>
                </div>
            </div>
            }
            <div>
                <BuyModal />
            </div>
        </div>
    )
}