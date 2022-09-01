import React from "react"
import {useEffect, useState} from "react";
import axios from "axios";
import NavCategory from "./NavCategory";
import { useApp } from "../context/AppContext";

export default function Navbar() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const appContext = useApp();

    const {isMobile} = appContext

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setLoading(true);
            try {
                const response = await axios('https://fakestoreapi.com/products/categories')
                setData(response.data)
                setLoading(false)
                
            } catch(err) {
                console.log(err)
                setError(true)
            }
        }
        fetchData()
    }, [])

    return(
        <div className={isMobile?"navbar-container-mobile": "navbar-container"}>
            {!isMobile && <h2>Categories</h2>}
            {loading ? <h2>Loading..</h2> : 
            <ul>
                {data.map((e, i) => <NavCategory key={i} e={e}/>)}
            </ul>
            }
        </div>
    )
}