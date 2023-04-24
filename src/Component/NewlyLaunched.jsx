import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "./styles/HomeAutoSlider.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export const NewlyLaunched = () => {

    SwiperCore.use([Autoplay]);

    return (
        <>
            <h2 style={{textAlign : "center",marginTop:"20px",marginBottom:"40px"}}>NEWLY LAUNCHED</h2>
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
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg" className="img-size" alt="image-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg" className="img-size" alt="image-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg" className="img-size" alt="image-3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg" className="img-size" alt="image-4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg" className="img-size" alt="image-5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif" className="img-size" alt="image-6" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg" className="img-size" alt="image-7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif" className="img-size" alt="image-8" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}