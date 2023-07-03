import React, { useEffect, useState } from 'react'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Service} from '../../components/index';
import {SrcServices} from "./../../sources/index";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./Services.css"

const Services = () => {
    const [width, setWidth] = useState(window.innerWidth)

    //whent resize window change setWidt
    useEffect(_ => {
        window.addEventListener("resize", handleResize)
    }, [])

    //Set width as winow width
    const handleResize = _ => {
        setWidth(window.innerWidth)
    }

    return (
        <div className='services'>
            <div className='container'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={width > 1200 ? 4 : width > 990 ? 3 : width > 450 ? 2 :  1} //slides count based on window width
                navigation
                className='siwper'
                >
                {
                    SrcServices.map(e => 
                        <SwiperSlide key={e.key}>
                            <Service icon={e.icon} title={e.title} desc={e.desc} />
                        </SwiperSlide>
                        )
                }
                

            </Swiper>
            </div>
        </div>
    )
}

export default Services