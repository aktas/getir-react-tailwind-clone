import React, { Component, useState } from "react";
import Slider from 'react-slick' // npm install react-slick --save && npm install slick-carousel --save
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from 'react-flags-select';
import { FaFacebook } from 'react-icons/fa'
import { useWindowWidth } from '@react-hook/window-size' // npm install @react-hook/window-size

const HeroSection = () => {

    const [selected, setSelected] = useState('TR')

    const windowWidth = useWindowWidth()

    const phones = {
      US: '+1',
      DE: '+50',
      TR: '+90',
      IT: '+7',
      IN: '+15'
    }

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: 'linear'
    };
    return (     
      <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        {windowWidth >= 768 && <Slider {...settings}>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" />
          </div>
        </Slider>}
        <div className="md:container gap-y-8 flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20 ">
          <div className="hidden md:block">
            <img src="https://getir.com/_next/static/images/groceriesInMinutes-20f12c15098e8fd2bae874e2a40e343b.svg" />
            <h3 className="text-4xl mt-8 font-semibold text-white">
              Dakikalar İçinde <br /> Kapınızda
            </h3>
          </div>
          <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
            <h4 className="mb-4 text-primary-brand-color text-center font-semibold ">Giriş yap veya kayıt ol</h4>
            <div className="grid gap-y-4">
              <div className="flex gap-x-2" >
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                placeholder="Select Language" 
                onSelect={code => setSelected(code)} 
                selected={selected}
                className="flag-select" />
                <label className="flex-1 relative block">
                  <input type="text" required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color outline-none focus:border-primary-brand-color peer text-sm pt-2" />
                  <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm cursor-text text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
                </label>
              </div>
              <button className="bg-brand-yellow transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color">
                  Telefon numarası ile devam et
              </button>
              <hr className="h-[1px] bg-gray-300 my-2" />
              <button className="bg-blue-700 bg-opacity-10 text-blue-700 px-4 text-opacity-80 transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center rounded-md w-full text-sm font-semibold">
                  <FaFacebook size={24}  /> 
                  <span className="mx-auto">
                    Facebook ile devam et
                  </span>
              </button>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default HeroSection