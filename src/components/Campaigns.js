import React, { useState, useEffect } from "react";
import Slider from 'react-slick' // npm install react-slick --save && npm install slick-carousel --save
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bannerData from "./../api/banners.json"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useWindowWidth } from '@react-hook/window-size' // npm install @react-hook/window-size


function NextBtn({ className, onClick }) {
    return <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2 text-xl`} onClick={onClick}><IoIosArrowForward /></button>;
}
  
function PrevBtn({ className, onClick }) {
    return <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2 text-xl`} onClick={onClick}><IoIosArrowBack /></button>;
}
  

function Campaigns(){

    const windowWidth = useWindowWidth()

    const [banners, setBanners] = useState([])

    useEffect(() => {
        setBanners(bannerData)
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'linear',
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
      };
    return(
        <div className="md:container mx-auto md:py-8">
            <h3 className="hidden md:block text-sm font-semibold mb-3">
                Kampanyalar
            </h3>
            <Slider {...settings} className="md:-mx-2">
                {banners.length && banners.map((banner, index) => (
                    <div key={banner.id} className="md:px-2">
                        <img src={banner.image} className="md:rounded-lg" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Campaigns