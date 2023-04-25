import BestSellers from "./BestSellers";
import { Footer } from "./Footer";
import HotDeals from "./HotDeals";
import { Navbar } from "./Navbar";
import { AutoSlider} from "./AutoSlider";
import "./styles/HomePage.css";

const newLaunchdata = [
    {
        id:1,
        img : "https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg"
    },
    {
        id:2,
        img : "https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg"
    },
    {
        id:3,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg"
    },
    {
        id:4,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg"
    },
    {
        id:5,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg"
    },
    {
        id:6,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif"
    },
    {
        id:7,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg"
    },
    {
        id:8,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif"
    }
]

const newHomedata = [
    {
        id:1,
        img : "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg"
    },
    {
        id:2,
        img :"https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg"  
    },
    {
        id:3,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/5dfdfad9-7419-46b3-85dc-1cde9429619d.gif"
    },
    {
        id:4,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/eedba493-c795-435f-b323-a026045a571b.gif"
    },
    {
        id:5,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/be784c39-2c84-45d0-89c4-e79f72b380b0.jpg"
    },

    {
        id:6,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg"
    },
    {
        id:7,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/efc32eea-4d1e-4275-b72d-13a399550ba4.jpg"
    },
    {
        id:8,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg"
    },
    {
        id:9,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg"
    },
]

const newQuickdata = [
    {
        id:1,
        img : "https://d32baadbbpueqt.cloudfront.net/Homepage/64f2889d-e2d9-4047-82cd-e0e820230a77.jpg"
    },
    {
        id:2,
        img :"https://d32baadbbpueqt.cloudfront.net/Homepage/36e44ab4-2b5b-4b5c-b35a-fb56a9c59f1a.jpg" 
    },
    {
        id:3,
        img:"https://d32baadbbpueqt.cloudfront.net/Homepage/fb3fbeba-23b1-42cf-946d-d69c2a3f393f.jpg"
    }
]

export const HompePage = () => {
    return (
        <div>
            <Navbar />

            <AutoSlider newdata={newHomedata} />

            {/* refer--div */}
            
            <div className="refer-div">
                <h2 style={{textAlign:"center",marginTop:"40px",marginBottom:"40px"}}>REFER YOUR FRIENDS</h2>
                <div className="refer-img">
                    <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/b7d9027a-a2c1-442e-a804-424d703a64d3.jpg" />
                </div>
            </div>

            {/* vedio-start */}

            <div className="video-div">
                <h2 style={{textAlign:"center",marginTop:"40px",marginBottom:"40px"}}>CONTOUR DE FORCE EYES & FACE PALETTE</h2>
                <div>
                    <iframe  className="vedios-size" src="https://www.youtube.com/embed/1_CEXA8sfY8"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </div>

            {/* <!-- //bestsellers slider start --> */}

            <BestSellers/>
            <h2 style={{ textAlign: "center", marginBottom: "40px" }}>QUICK BEAUTY TIPS WITH SUGAR</h2>
            <AutoSlider newdata={newQuickdata} />
            <HotDeals/>
            <h2 style={{ textAlign: "center", marginTop: "20px", marginBottom: "40px" }}>NEWLY LAUNCHED</h2>
            <AutoSlider newdata={newLaunchdata}/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}