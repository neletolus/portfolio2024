import {useEffect, useState} from "react";
import LinkContents from "./links/LinkContents.tsx";
import "./links.scss"
import Footer from "./parts/Footer.tsx";
export default function Links() {
    const [isInit, setIsInit] = useState(true)
    useEffect(() => {
        setIsInit(false)
    }, []);
    return (<div className="linkContainer pageContainer" style={isInit? ({opacity:0}) : ({opacity: 1})}>
        <LinkContents/>
        <Footer />
    </div>)
}