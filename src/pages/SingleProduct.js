import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { useApp } from "../context/AppContext";
import BuyModal from "../components/BuyModal";
import StarRating from "../components/StarRating";


export default function SingleProduct() {

    const {id} = useParams()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [inputQty, setInputQty] = useState(1)

    const appContext = useApp()
    const {itemsInCart, isBuyModalActive, setItemsInCart,setBuyModalActive, setOverlayActive} = appContext

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

    // useEffect(() => {
    //     localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart))
    // }, [itemsInCart])

    const addToCartHandle = () => {
        if(itemsInCart.map(e => e.id).includes(data.id)) {
            setItemsInCart(prevState => prevState.map(e => {
                if(e.id === data.id) {
                    return {...e, counter: e.counter + inputQty}
                } else {
                    return e
                }
            }))
        } else {
            setItemsInCart(prevState => [...prevState, {
                ...data,
                cartSelected: false,
                counter: inputQty
            }])
        }
        setBuyModalActive(true)
        setOverlayActive(true)
    }

    const inputHandle = (e) => {
        if(e.target.value <= 0) {
           setInputQty(1) 
        } 
        else {   
            setInputQty(Number(e.target.value.replace(/\D/g, 1)))
        }
    }

    const decreaseHandle = () => {
        if(inputQty === 1) {
            setInputQty(prevState => prevState)
        } else {
            setInputQty(prevState => prevState - 1)
        }
    }

    const increaseHandle = () => {
        setInputQty(prevState => prevState + 1)
    }

    const styles = {
        color: inputQty === 1 ? "rgb(202, 191, 191)" : "black"
    }

    return(
        <div >
            {loading? <LoadingSpinner/>:
            <div className="singleproduct">
                <img className="singleproduct-image" src={data.image} />
                <div className="singleproduct-info">
                    <h3>{data.title}</h3>
                    <StarRating key={data.id} rating={data.rating}/>
                    <p>{data.description}</p>
                    <p>{`${data.price.toLocaleString("cz-CZ")} €`}</p>
                    <button onClick={addToCartHandle}>Add to cart</button>
                    <div className="singleproduct-qty">
                        <button style={styles} onClick={decreaseHandle} className="singleproduct-qty-decrease">-</button>
                        <input value={inputQty} className="singleproduct-qty-input" onChange={inputHandle}/>
                        <button onClick={increaseHandle} className="singleproduct-qty-increase">+</button>
                    </div>
                </div>
            </div>
            }
            <div>
                <BuyModal />
            </div>
            <div onClick={() => {
                setBuyModalActive(false)
                setOverlayActive(false)
            }} className={isBuyModalActive? "overlay" : "overlay hidden"}>
            </div>
        </div>
    )
}