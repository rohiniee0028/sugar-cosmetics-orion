import React, { useEffect, useRef, useState } from 'react'
import './styles/HotDeals.css'
import { ImageTag } from './ImageTag';
const images = [
    {
        id: 1,
        img: "https://d32baadbbpueqt.cloudfront.net/Homepage/267d9b68-40e3-4efb-bda1-f534f475ee24.jpg"
    },
    {
        id: 2,
        img: "https://d32baadbbpueqt.cloudfront.net/Homepage/b8278548-ed11-44b4-9818-25c5146c604d.jpg"
    },
    {
        id: 3,
        img: "https://d32baadbbpueqt.cloudfront.net/Homepage/7145deaa-8296-49ba-9964-061fded28226.jpg"
    },
    {
        id: 4,
        img: "https://d32baadbbpueqt.cloudfront.net/Homepage/2cd03446-33d8-47df-982a-3991ac582be1.jpg"
    },
    {
        id: 5,
        img: "https://d32baadbbpueqt.cloudfront.net/Homepage/d81e88d8-712e-4e18-90f2-93bd27236050.jpg"
    },
    {
        id: 6,
        img: "https://d32baadbbpueqt.cloudfront.net/Homepage/7b817474-27aa-4c69-816d-960bfbc1d2a9.jpg"
    }
]
const HotDeals = () => {
    let box = document.querySelector('.product-container');
    const ref = useRef(null);

    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, []);


    const btnpressprev = () => {
        box.scrollLeft = box.scrollLeft - width;
        // console.log(width)
    }

    const btnpressnext = () => {
        box.scrollLeft = box.scrollLeft + width;
        // console.log(width)
    }
    return (
        <>
        <h2 style={{textAlign:"center", marginTop:"40px",marginBottom:"15px"}}>HOT DEALS</h2>
        <div className="product-carousel" ref={ref}>
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className="product-container">
                {
                    images.map((el) => (
                        <div className='mycard' key={el.id}>
                            <ImageTag url={el.img} width={"100%"}/>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default HotDeals