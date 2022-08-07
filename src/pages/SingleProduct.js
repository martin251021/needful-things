import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { useApp } from "../context/AppContext";

export default function SingleProduct() {

    const {id} = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const appContext = useApp()
    const {itemsInCart, setItemsInCart} = appContext

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

    const addToCartHandle = () => {
        if(itemsInCart.map(e => e.id).includes(data.id)) {
            // setItemsInCart(prevState => prevState[prevState.indexOf(prevState.id === data.id)].counter = prevState.counter + 1)
            // setItemsInCart(prevState => [...prevState, prevState.find(e => e.id === data.id).counter = prevState.counter + 1])
            setItemsInCart(prevState => prevState.map(e => {
                if(e.id === data.id) {
                    return {...e, counter: e.counter + 1}
                }
            }))
        } else {
            setItemsInCart(prevState => [...prevState, {
                ...data,
                counter: 1
            }])
        }

        // setItemsInCart(prevState => [...prevState, data])
        // console.log(itemsInCart.find(e => e.id === data.id).counter)
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
        </div>
    )
}