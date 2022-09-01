import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";


export default function ImageSlider({data}) {

    const appContext = useApp();
    const {isMobile} = appContext

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
      }
    
      const imgStyles = {
        height: isMobile? "8rem" : "25rem"
      }

      const sliderStyles = {
        marginLeft: isMobile? "-2rem" : ""
      }
      
    return(
            <div style={sliderStyles} className="imgslider">
                <Slider {...settings}>
                        {data.map(e => {
                            return(
                                <div className="imgslider-item" key={e}>
                                    <Link to={`/search/${e.id}`} target="_blank">
                                        <img style={imgStyles} className="slider-img" src={e.image} />
                                    </Link>
                                </div> 
                                )
                            })}
                </Slider>
            </div>
    )
}