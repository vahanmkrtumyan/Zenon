import React, { useState, useRef } from "react";
import Footer from "./Footer";
import ReactSVG from 'react-svg'


const Services = () =>



    {
        
        const [bannerDimensions, setBannerDimensions] = useState({});
        const banner = useRef();
        

        
        return (
            
            <React.Fragment>
                <section className="banner services-banner" id="top" ref={banner}>
                    <div className="content">
                        <h1 className="color-secondary">услуги</h1>
                        <ReactSVG src="./img/Zenon-Services-Opacity.svg" />
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }

    export default Services;