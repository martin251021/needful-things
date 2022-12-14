import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import LoadingSpinner from "../components/LoadingSpinner";
import { useApp } from "../context/AppContext";

export default function Category() {

    const {category} = useParams()
    const appContext = useApp()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const {isMobile} = appContext

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
        <div className={isMobile? "category-items-container-mobile" : "category-items-container"}>
            {loading && !error ? <LoadingSpinner/> :          
            data.map((e,i) => <Product key={i} {...e} />)
            }
        </div>
    )
}