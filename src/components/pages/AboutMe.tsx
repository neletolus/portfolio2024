import "./aboutme.scss"
import {useEffect, useState} from "react";
import AboutMeContents from "./about/AboutMeContents.tsx";
import Footer from "./parts/Footer.tsx";
export default function AboutMe() {
    const [isInit, setIsInit] = useState(true)
    useEffect(() => {
        setIsInit(false)
    }, []);
    return (<div className="aboutMeContainer pageContainer" style={isInit? ({opacity:0}) : ({opacity: 1})}>
        <AboutMeContents />
        <Footer />
    </div>)
}