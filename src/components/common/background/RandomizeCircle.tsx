import {useEffect, useState} from "react";

export default function RandomizeCircle() {
    const [isInit, setIsInit] = useState(true)
    const getRandomStyle = () => {
        const sizeRandom = Math.random() * 100 + "px";
        return {
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            width: sizeRandom,
            height: sizeRandom,
            opacity: 1
        };
    }

    useEffect(() => {
        setIsInit(false)
    }, []);

    return (
        <div style={isInit ? ({top:"calc(50% - 50px)", left:"calc(50% - 50px)", width:"100px", height:"100px"}) : getRandomStyle()}></div>
    )
}