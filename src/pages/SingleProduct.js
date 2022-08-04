import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

export default function SingleProduct() {

    const {id} = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            setError(false)
            try {
                const response = await axios(`https://fakestoreapi.com/products/${id}`)
                setData(response.data)
                console.log(response.data)
                setLoading(false)
            } catch(err) {
                setError(true);
                console.log(err)
            }
        }
        fetchData()
    }, [id])

    return(
        <div >
            {loading? <LoadingSpinner/>:
            <div className="singleproduct">
            {/* <div className="singleproduct-image-container"> */}
                <img className="singleproduct-image" src={data.image} />
            {/* </div> */}
            <div className="singleproduct-info">
                <h4>{data.title}</h4>
                <p>{`${data.price} €`}</p>
                <p>{data.description}</p>
            </div>
            </div>
        }
        </div>
    )
}