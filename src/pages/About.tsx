import React, { FunctionComponent } from "react";
import { CDN_URL } from "../utils/contants";
import { Footer } from "../components/aesthetic/Footer";
import { Header } from "../components/aesthetic/Header";
import "../components/aesthetic/aesthetic.css"

export const About: FunctionComponent = () => {
    return (
        <div className="color-default relative-position flex-container-column content-container">
            <Header/>
                <div className="center about-container">
                    <img className='portrait-img' src={`${CDN_URL}/about/me.png`}/>
                    <div className="flex-container-column">
                        <p>Alex Haight is a photographer currently based out of Seattle, WA.</p>
                    </div>
                </div>
            <Footer />
        </div>
    )
}