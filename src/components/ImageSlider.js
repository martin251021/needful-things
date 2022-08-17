import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Link } from "react-router-dom";


export default function ImageSlider({data}) {


    const settings = {
        arrows: true,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 3000,
      pauseOnFocus: true
      };
      
    return(
            <div className="imgslider">
                <Slider {...settings}>
                        {data.map(e => {
                            return(
                                <div className="imgslider-item" key={e}>
                                    <Link to={`/search/${e.id}`} target="_blank">
                                        <img className="slider-img" src={e.image} />
                                    </Link>
                                </div> 
                                )
                            })}
                </Slider>
            </div>
    )
}