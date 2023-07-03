import React, {useState, useEffect} from 'react'
import { Navigation, A11y, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SrcPopularCourses } from '../../sources';
import { PopularCourse } from '../../components';

import "./PopularCourses.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PopularCourses = () => {
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
    <div className='popular-courses-section'>
        <div className='container'>
            <div className='title'>
                <h2>
                    Our Popular Courses
                </h2>
            </div>
            <div className='courses'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={35}
                    slidesPerView={width > 1200 ? 4 : width > 990 ? 3 : width > 450 ? 1 :  1}
                    navigation
                    pagination={{ clickable: true}}
                    className='courses-siwper'
                >
                    {
                        SrcPopularCourses.map(course => 
                            <SwiperSlide key={course.Key}>
                                <PopularCourse course = {course}></PopularCourse>
                                
                            </SwiperSlide>
                        )
                    }
                    

                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default PopularCourses