import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
                setLoading(false)
            } catch(err) {
                setError(true);
                console.log(err)
            }
        }
        fetchData()
    }, [])

    return(
        <div>
            {loading? <h1>Loading...</h1>:
            <>
            <div>
                <img src={data.image} />
            </div>
            <div>

            </div>
            </>
        }
        </div>
    )
}