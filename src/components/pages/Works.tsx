import "./works.scss"
import WorkContents from "./works/WorkContents.tsx";
import {useEffect, useState} from "react";
import Footer from "./parts/Footer.tsx";
export default function Works() {
    const [isInit, setIsInit] = useState(true)
    useEffect(() => {
        setIsInit(false)
    }, []);
    return (<div className="workContainer pageContainer" style={isInit? ({opacity:0}) : ({opacity: 1})}>
        <WorkContents />
        <Footer />
    </div>)
}