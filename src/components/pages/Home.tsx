import Title from "../common/Title.tsx";
import CanvasContainer from "../Three/CanvasContainer.tsx";
import Background from "../common/Background.tsx";
import "./home.scss"
import {useEffect, useState} from "react";

export default function Home() {
    const [isInit, setIsInit] = useState(true)
    useEffect(() => {
        setIsInit(false)
    }, []);
    return (<div className="pageContainer homeContainer" style={isInit? ({opacity:0}) : ({opacity: 1})}>
        <Background/>
        <Title/>
        <CanvasContainer/>
    </div>)
}