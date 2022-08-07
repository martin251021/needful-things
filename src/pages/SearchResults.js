import React, { useEffect, useState} from "react";
import axios from "axios";
import { useApp } from "../context/AppContext";
import LoadingSpinner from "../components/LoadingSpinner";
import Product from "../components/Product";

export default function SearchResults() {

    const appContext = useApp()
    const {searchQuery} = appContext

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            setError(false)
            try {
                const response = await axios("https://fakestoreapi.com/products")
                setData(response.data)
                setLoading(false)
            } catch(err) {
                setError(true)
                console.log(err)
            }
        }

        fetchData()
    }, [])

    const searchHelper = (e) => {
        if(e.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
            e.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
            return true
        } else {
            return false
        }
    }

    return(
        <div className="category-items-container">
            {loading ? <LoadingSpinner/> : 
            data.filter(e => searchHelper(e)).map((e,i) => <Product key={i} {...e} />) 
            }
        </div>
    )
}