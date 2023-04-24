import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "./styles/HomeAutoSlider.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function HomeAutoSlider() {
    SwiperCore.use([Autoplay]);

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable:true
                }}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{
                    delay:2500
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg" className="img-size" alt="image-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg" className="img-size" alt="image-2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/5dfdfad9-7419-46b3-85dc-1cde9429619d.gif" className="img-size" alt="image-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/eedba493-c795-435f-b323-a026045a571b.gif" className="img-size" alt="image-3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/be784c39-2c84-45d0-89c4-e79f72b380b0.jpg" className="img-size" alt="image-4"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg" className="img-size" alt="image-5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/efc32eea-4d1e-4275-b72d-13a399550ba4.jpg" className="img-size" alt="image-6" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg" className="img-size" alt="image-7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg" className="img-size" alt="image-8" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
