import React from "react";
import BgVideo from "./../../assets/images/sea.mp4"
import "./MainBanner.css"


const MainBanner = () => {
    return (
        <div className="main-banner">
            <video autoPlay muted loop className="bg-video">
                <source src={BgVideo} type="video/mp4"></source>
            </video>
            <div className="main-banner-text">
                <div className="container">
                    <div className="centering">
                        <h6>Hello Studen</h6>
                        <h2>Welcome to education</h2>
                        <p>
                            This is an edu meeting HTML CSS template provided by <span>TemplateMo website</span>. 
                            This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, 
                            a group of young people by <span>Pressmaster</span>.
                        </p>
                        <div className="main-banner-buttons">
                            <a href="#log_in" className="main-button">
                                join us now!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner