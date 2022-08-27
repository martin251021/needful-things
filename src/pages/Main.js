import ImageSlider from "../components/ImageSlider";
import React,{useEffect, useState} from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import Product from "../components/Product";

export default function Main() {

    const[data, setData] = useState();
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            setError(false)
            try {
                const response = await axios("https://fakestoreapi.com/products");
                setData(response.data)
                setLoading(false)
                
            } catch(err) {
                console.log(err)
                setError(true)
            }
        }
        fetchData();
    },[])

    return(
            <div className="main-page">
                {loading && !error ? <LoadingSpinner /> :
                <div>
                    <ImageSlider data={data.filter(e => e.rating.rate > 4)}/>
                    <div className="main-best-container">
                    {Array.from(new Set(data.map(e => e.category))).map((e,i) => {
                        return(
                            <div key={i}>
                                <h2 className="main-best-title">Best of {e}</h2>
                                <div className="main-best-items-container">
                                {data.filter(el => el.rating.rate >3).filter(el => el.category === e).map((e,i) => <Product key={i} {...e}/>)}
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
                }
            </div>
    )
}