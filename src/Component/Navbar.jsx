import "./styles/Hamburger.css";
import { Anchor } from "./Anchors";
import { ImageTag } from "./ImageTag";
import "./styles/Navbar.css";
export const Navbar = () => {

    return (
        <>
            <div className="position-top-div">
                <div className="top-link">
                    <div className="flex-hamburger">
                         <label class="hamburger-menu" >
                            <input type="checkbox" />
                        </label>
                        <aside class="sidebar">
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
                        </aside>

                    </div>
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
                            <span ><i className="fa-solid fa-briefcase"></i></span>
                            <ImageTag url="https://in.sugarcosmetics.com/desc-images/discountIcon.svg" />
                        </div>
                    </div>
                    <div>
                        <div id="roh-searchdiv-small-screen" style={{marginBottom:"20px"}}>
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
                                <Anchor text={"LIPS"} />
                                <Anchor text={"FACE"} />
                                <Anchor text={"EYES"} />
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">BRUSHES</div>
                            <div className="dropdown-content">
                                <Anchor text={"FACE BRUSHES"} />
                                <Anchor text={"EYE BRUSHES"} />
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">SKINCARE</div>
                            <div className="dropdown-content">
                                <Anchor text={"MOSTURIZERS"} />
                                <Anchor text={"SUNSCREEN"} />
                                <Anchor text={"SETTING MISTS"} />
                                <Anchor text={"COFFEE CULTURE RANGE"} />
                                <Anchor text={"SHEET MASK COMBO"} />
                                <Anchor text={"CITRUS GOT REAL RANGE"} />
                                <Anchor text={"AQUAHOLIC RANGE"} />
                                <Anchor text={"MASKS"} />
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">TRENDING</div>
                            <div className="dropdown-content">
                                <Anchor text={"SUGAR MERCH STATION"} />
                                <Anchor text={"BEST SELLERS"} />
                                <Anchor text={"VALUE SETS"} />
                                <Anchor text={"SUGAR SETS"} />
                                <Anchor text={"MAKEUP KITS"} />
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">BLOG</div>
                            <div className="dropdown-content">
                                <Anchor text={"FEATURED"} />
                                <Anchor text={"MAKEUP"} />
                                <Anchor text={"SKINCARE"} />
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


        </>
    )
}