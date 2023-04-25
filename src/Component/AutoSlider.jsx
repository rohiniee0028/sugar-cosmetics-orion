import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "./styles/AutoSlider.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export const AutoSlider = ({ newdata}) => {

    SwiperCore.use([Autoplay]);

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{
                    delay: 2500
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {
                    newdata?.map((el) => (
                        <SwiperSlide key={el.id}>
                            <img
                                src={el.img} className="img-size" alt="image-1" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}