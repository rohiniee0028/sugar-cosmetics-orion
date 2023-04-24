import "./styles/Navbar.css";
export const Navbar = () => {

    return (
        <>
            <div className="position-top-div">
                <div className="top-link">
                    <div id="bb-link">
                        <p>Get a BB Cream and a Glitter Pouch on a spend of Rs.799</p>
                    </div>
                    <div id="fontimg">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className="above-nav">
                    <div className="Navbar">
                        <div id="roh-imgdiv">
                            <a href="index.html">
                                <img style={{ cursor: "pointer" }} src="https://media.sugarcosmetics.com/upload/Logo-static.jpg" alt="image-1" />
                            </a>
                        </div>
                        <div id="roh-searchdiv">
                            <input type="text" className="searchInp" placeholder="Try ''Liquid Lipstick''" />
                            <div style={{ cursor: "pointer" }} className="search-prod">Search</div>
                        </div>
                        <div id="roh-login-div" style={{ cursor: "pointer" }} >
                            <span><i className="fa-solid fa-user"></i></span>
                            <div id="changeName"><u>Login/Register</u></div>
                        </div>
                        <div id="roh-paths" style={{ cursor: "pointer" }}>
                            <span><i className="fa-solid fa-heart"></i></span>
                            <div className="show-wish">Wishlist</div>
                            <span ><i className="fa-solid fa-briefcase"></i></span>
                            <div className="show-cart">Cart</div>
                            <img src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg" />
                        </div>
                    </div>
                    <div>
                        <div id="roh-searchdiv-small-screen">
                            <input type="text" className="searchInp" placeholder="Try ''Liquid Lipstick''" />
                            <div style={{ cursor: "pointer" }} className="search-prod">Search</div>
                        </div>
                    </div>
                </div>
                <div id="roh-options-div">
                    <div id="roh-options">
                        <div className="dropdown">
                            <div className="dropbtn">MAKEUP</div>
                            <div className="dropdown-content">
                                <a href="#" className="sub-drop">LIPS</a>
                                <div className="sub-dropdown-content">
                                    <a href="#">LIPSTICK</a>
                                    <a href="#">WONDER WOMAN LIPSTICK RANGE</a>
                                    <a href="#">LIP CARE</a>
                                    <a href="#">LIQUID LIP COLOURS</a>
                                    <a href="#">LIP GLOSS & LINERS</a>
                                    <a href="#">VALUE SETS</a>
                                    <a href="#">GIFTING</a>
                                </div>
                                <a href="#" className="sub-drop">FACE</a>
                                <div className="sub-dropdown-content">
                                    <a href="#">PRIMERS</a>
                                    <a href="#">POWDER/COMPACT</a>
                                    <a href="#">FOUNDATION & BB CREAM</a>
                                    <a href="#">CONCEALERS & CORRECTORS</a>
                                    <a href="#">BLUSH</a>
                                    <a href="#">HIGHLIGHTERS & CONTOUR</a>
                                    <a href="#">BRONZER</a>
                                    <a href="#">FACE PALLETS</a>
                                    <a href="#">VALUE SETS</a>
                                </div>
                                <a href="#" className="sub-drop-3">EYES</a>
                                <div className="sub-dropdown-content">
                                    <a href="#">EYELINERS</a>
                                    <a href="#">KAJAL</a>
                                    <a href="#">EYEBROWS</a>
                                    <a href="#">EYESHADOW</a>
                                    <a href="#">MASCARA</a>
                                    <a href="#">EYESHADOW PALLETS</a>
                                    <a href="#">VALUE SETS</a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">BRUSHES</div>
                            <div className="dropdown-content">
                                <a href="#">FACE BRUSHES</a>
                                <a href="#">EYE BRUSHES</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">SKINCARE</div>
                            <div className="dropdown-content">
                                <a href="#">MOSTURIZERS</a>
                                <a href="#">SUNSCREEN</a>
                                <a href="#">SETTING MISTS</a>
                                <a href="#">COFFEE CULTURE RANGE</a>
                                <a href="#">SHEET MASK COMBO</a>
                                <a href="#">CITRUS GOT REAL RANGE</a>
                                <a href="#">AQUAHOLIC RANGE</a>
                                <a href="#">MASKS</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">TRENDING</div>
                            <div className="dropdown-content">
                                <a href="#">SUGAR MERCH STATION</a>
                                <a href="#">MAKEUP KITS</a>
                                <a href="#">BEST SELLERS</a>
                                <a href="#">SUGAR SETS</a>
                                <a href="#">VALUE SETS</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">BLOG</div>
                            <div className="dropdown-content">
                                <a href="#">FEATURED</a>
                                <a href="#">MAKEUP</a>
                                <a href="#">SKINCARE</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">
                                OFFERS
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">
                                STORES
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid-div">
                <div>
                    <select>
                        <option value="makeup">MAKEUP</option>
                        <option value="lips">LIPS</option>
                        <option value="face">FACE</option>
                        <option value="eyes">EYES</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option value="brushes">BRUSHES</option>
                        <option value="face brushes">FACE BRUSHES</option>
                        <option value="eye brushes">EYE BRUSHES</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option value="skincare">SKINCARE</option>
                        <option value="mosturizers">MOSTURIZERS</option>
                        <option value="sunscreen">SUNSCREEN</option>
                        <option value="setting mists">SETTING MISTS</option>
                        <option value="coffee culture range">COFFEE CULTURE RANGE</option>
                        <option value="sheet mask combo">SHEET MASK COMBO</option>
                        <option value="citrus got real range">CITRUS GOT REAL RANGE</option>
                        <option value="aquaholic range">AQUAHOLIC RANGE</option>
                        <option value="masks">MASKS</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option value="trending">TRENDING</option>
                        <option value="sugar merch station">SUGAR MERCH STATION</option>
                        <option value="makeup kits">MAKEUP KITS</option>
                        <option value="best sellers">BEST SELLERS</option>
                        <option value="sugar sets">SUGAR SETS</option>
                        <option value="value sets">VALUE SETS</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option value="blog">BLOG</option>
                        <option value="featured">FEATURED</option>
                        <option value="makeup">MAKEUP</option>
                        <option value="skincare">SKINCARE</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option value="offers">OFFERS</option>
                        <option value="stores">STORES</option>
                    </select>
                </div>
            </div>
            
        </>
    )
}