import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import React,{useEffect, useState} from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";


export default function ImageSlider() {

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

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000,
       
      };

      
    return(
        <div>

            <div className="imgslider">
                {loading? <LoadingSpinner /> :
                    <Slider {...settings}>
                        {data.filter(e => e.rating.rate > 4).map(e => {
                            return(
                                <div key={e}><img className="slider-img" src={e.image} /></div> // problem je v gride
                            )
                        })}
                    </Slider>} 

                
            </div>
        </div>
    )
}