import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "./styles/HomeAutoSlider.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function QuickBeauty() {
    SwiperCore.use([Autoplay]);

    return (
        <>
            <h2 style={{textAlign:"center",marginBottom:"40px"}}>QUICK BEAUTY TIPS WITH SUGAR</h2>
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
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/64f2889d-e2d9-4047-82cd-e0e820230a77.jpg" className="img-size" alt="image-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/36e44ab4-2b5b-4b5c-b35a-fb56a9c59f1a.jpg" className="img-size" alt="image-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/fb3fbeba-23b1-42cf-946d-d69c2a3f393f.jpg" className="img-size" alt="image-2" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
