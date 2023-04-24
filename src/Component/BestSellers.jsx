import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './styles/BestSellers.css'

const data = [
    {
        id: 1,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
        title: "METTLE PRIMING BALM",
        price: "₹1099",
        btn: "ADD TO CART"
    },
    {
        id: 2,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
        title: "AIR KISS POWDER LIPSTICK",
        price: "₹499",
        btn: "SELECT SHADE"
    },
    {
        id: 3,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
        title: "BLING LEADER ILLUMINATING",
        price: "₹599",
        btn: "SELECT SHADE"
    },
    {
        id: 4,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg?v=1644325813",
        title: "SMUDGE ME NOT LIQUID LIPSTICK",
        price: "₹499",
        btn: "SELECT SHADE"
    },
    {
        id: 5,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",
        title: "SET THE TONED TINTED POWDER",
        price: "₹699",
        btn: "SELECT SHADE"
    },
    {
        id: 6,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
        title: "LIP ZIP MATTE TOPPER",
        price: "₹499",
        btn: "ADD TO CART"
    },
    {
        id: 7,
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FParent-Page_ac0201bb-8f51-447c-b6e0-4404786076a2.jpg%3Fv%3D1680364145&w=256&q=75",
        title: "MATTE AS HELL CRAYON LIPSTICK",
        price: "₹799",
        btn: "SELECT SHADE"
    },
    {
        id: 8,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
        title: "GODDESS OF FLAWLWSS SPF30+ BB CREAM ",
        price: "₹699",
        btn: "SELECT SHADE"
    },
    {
        id: 9,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1644399711",
        title: "KOHL OF HONOUR INTENSE KAJAL ",
        price: "₹249",
        btn: "SELECT SHADE"
    },
    {
        id: 10,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
        title: "BLEND THE RULES EYESHADOW PALETTE",
        price: "₹1199",
        btn: "SELECT SHADE"
    },
    {
        id: 11,
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F3_7.jpg%3Fv%3D1626795160&w=256&q=75",
        title: "BASE OF GLORY PORE MINIMIZING PRIMER",
        price: "₹799",
        btn: "ADD TO CART"
    },
    {
        id: 12,
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F07_6fa35950-4830-4e97-80ea-d40f2fb42801.jpg%3Fv%3D1680622820&w=256&q=75",
        title: "CONTOUR DE FORCE FACE PALATTE",
        price: "₹799",
        btn: "SELECT SHADE"
    },
    {
        id: 13,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-arrested-for-overstay-waterproof-eyeliner-01-i-ll-be-black-black-12784884973651.jpg?v=1619101912",
        title: "ARRESTED FOR OVERSTAY WATERPROOF EYELINER-O1 I'LL BE BLACK (BLACK)",
        price: "₹899",
        btn: ">ADD TO CART"
    },
    {
        id: 14,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
        title: "ALL SET TO GO BANANA POWDER",
        price: "₹599",
        btn: "ADD TO CART"
    },
    {
        id: 15,
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412",
        title: "TIPSY LIPS MOSTURIZING BALM",
        price: "₹199",
        btn: "SELECT SHADE"
    },
    {
        id: 16,
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F464576762-launch_sugar-la-la-love-18hr-liquid-lipstick-wbg-powered-by-images_01.jpg%3Fv%3D1674489987&w=256&q=75",
        title: "CONTOUR DE FORCE FACE PALATTE",
        price: "₹799",
        btn: "SELECT SHADE"
    }
]

export default function BestSellers() {
    let box = document.querySelector('#product-container');
    const ref = useRef(null);

    const [width1, setWidth1] = useState(0);

    useEffect(() => {
        setWidth1(ref.current.offsetWidth);
    }, []);


    const btnpressprev = () => {
        box.scrollLeft = box.scrollLeft - width1;
        // console.log(width)
    }

    const btnpressnext = () => {
        box.scrollLeft = box.scrollLeft + width1;
        // console.log(width)
    }

    return (
        <>
                <h2 style={{ textAlign: "center", marginTop: "50px",marginBottom:"-20px" }}>BESTSELLERS</h2>
                <div id="product-carousel" ref={ref}>
                    <button id="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
                    <button id="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
                    <div id="product-container">
                        {
                            data.map((el) => (
                                <div className="mychild" key={el.id}>
                                    <img
                                        src={el.img} alt={`image+${el.id}`} />,
                                    <p>{el.title}</p>
                                    <p>{el.price}</p>
                                    <button>{el.btn}</button>
                                </div>
                            ))
                        }
                    </div>

                </div>
        </>
    );
}
