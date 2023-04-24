import BestSellers from "./BestSellers";
import { Footer } from "./Footer";
import HomeAutoSlider from "./HomeAutoSlider"
import HotDeals from "./HotDeals";
import { Navbar } from "./Navbar";
import { NewlyLaunched } from "./NewlyLaunched";
import QuickBeauty from "./QuickBeauty";
import "./styles/HomePage.css";

export const HompePage = () => {
    return (
        <div>
            <Navbar />

            <HomeAutoSlider />

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
            <QuickBeauty/>
            <HotDeals/>
            <NewlyLaunched/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}