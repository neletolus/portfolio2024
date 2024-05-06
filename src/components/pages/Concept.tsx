import "./concept.scss"
import {useEffect, useState} from "react";
import Footer from "./parts/Footer.tsx";
import ConceptContents from "./concept/ConceptContents.tsx";
export default function Concept() {
    const [isInit, setIsInit] = useState(true)
    useEffect(() => {
        setIsInit(false)
    }, []);
    return (<div className="conceptContainer pageContainer" style={isInit? ({opacity:0}) : ({opacity: 1})}>
        <ConceptContents />
        <Footer />
    </div>)
}