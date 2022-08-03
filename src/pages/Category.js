import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Product from "../components/Product";

export default function Category() {

    const {category} = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async() => {
            setError(false)
            setLoading(true)
            try {
                const response = await axios(`https://fakestoreapi.com/products/category/${category}`)
                setData(response.data)
                setLoading(false)
            } catch(err) {
                console.log(err)
                setError(true)
            }
        }
        fetchData()
    }, [category])

    return(
        <div className="category-items-container">
            {loading ? <h1>Loading..</h1> :
            // data.map((e,i) => <div key={i}><p>{e.title}</p></div>)           
            data.map((e,i) => <Product key={i} {...e} />)
            }
        </div>
    )
}