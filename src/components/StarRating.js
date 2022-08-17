import React from "react";
import {FaStar} from "react-icons/fa";


export default function StarRating({rating}) {

    const {rate, count} = rating

    return(
        <div className="star-rating">
            {[...Array(5)].map((e,i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i}>
                        <input className="star-rating-input" type="radio" name="rating" value={Math.round(rate)}/>
                        <FaStar className="star" color={ratingValue <= Math.round(rate) ? "#ffc107" : "e4e5e9"}/>
                    </label>
                    )
            })}
        </div>
    )
}