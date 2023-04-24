import "./styles/Footer.css";

export const Footer = () => {
    return (
        <div className="footer_container">
            <div className="sub-footer">
                <div id="img-site">
                    <img src="https://in.sugarcosmetics.com/Footer_sugar_icon.png" />
                </div>
                <div id="social-icons">
                    <i href="https://www.facebook.com/"><img
                        src="https://in.sugarcosmetics.com/desc-images/facebook.svg" /></i>
                    <i href="https://mail.google.com"><img
                        src="https://www.seekpng.com/png/small/983-9831667_012-329-email-icon.png" /></i>
                    <i href="https://www.instagram.com/accounts/login/"><img
                        src="https://in.sugarcosmetics.com/desc-images/Instagram.svg" /></i>
                    <i href="https://in.pinterest.com/login/"><img
                        src="https://in.sugarcosmetics.com/desc-images/Pinterest.svg" /></i>
                    <i href="https://www.tumblr.com/tagged/login?sort=top"><img
                        src="https://in.sugarcosmetics.com/desc-images/Tumblr.svg" /></i>
                    <i href="https://www.youtube.com/"><img src="https://in.sugarcosmetics.com/desc-images/Youtube.svg" /></i>
                    <i href="https://twitter.com/i/flow/login"><img
                        src="https://cdn-icons-png.flaticon.com/512/107/107195.png" /></i>
                </div>
                <div className="middle-div">
                    <div className="middle-div-half">
                        <h4 className="h4-div">SUBSCRIBE TO OUR NEWSLETTER</h4>
                        <div id="email-div">
                            <input type="email" placeholder="Your email address" />
                            <button>SIGN UP</button>
                        </div>
                    </div>
                    <div className="middle-div-half">
                        <h4 className="h4-div">GET THE NEW SUGAR APP TODAY</h4>
                        <div id="app-div">
                            <div className="h4-div">Tap into a better shopping experience</div>
                            <img src="https://in.sugarcosmetics.com/playstore.png" />
                            <img src="	https://in.sugarcosmetics.com/apple-store.png" />
                        </div>
                    </div>
                </div>
                <div className="information-div">
                    <h4 >INFORMATION</h4>
                    <div id="sub-info">
                        <a href="">Stores</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Returns</a>
                        <a href="">FAQs</a>
                        <a href="">About Us</a>
                    </div>
                </div>
                <div className="get-div">
                    <h4>GET IN TOUCH</h4>
                    <div id="sub-get-div">
                        <div>
                            <div id="call-us">
                                <img src="https://in.sugarcosmetics.com/desc-images/phone_android_white.svg" />
                                <div>Call us at</div>
                            </div>
                            <a href="#">1800-209-9933</a>
                            <div style={{color:"#999999", fontSize:"12px"}}>Monday to Friday : 9 AM to 7 PM </div>
                        </div>
                        <div>
                            <div>Support</div>
                            <a href="">hello@sugarcosmetics.com</a>
                        </div>
                        <div>
                            <div>Careers</div>
                            <a href="">We're hiring!</a>
                        </div>
                        <div>
                            <div>PRESS & MEDIA</div>
                            <a href="">pr@sugarcosmetics.com</a>
                        </div>
                        <div>
                            <div>INFLUENCER COLLAB</div>
                            <a href="">JOIN US</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="copy-right">
                Copyright © 2022 SUGAR Cosmetics. All rights reserved.
            </div>
        </div>
    )
}