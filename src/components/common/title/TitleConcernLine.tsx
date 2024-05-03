import {CSSProperties, useEffect, useState} from "react";


type Props = {
    beforeCss: CSSProperties,
    afterCss: CSSProperties
}
export default function TitleConcernLine({beforeCss, afterCss}: Props) {
    const [isInit, setIsInit] = useState(true)

    useEffect(() => {
        setIsInit(false)
    }, []);
    return (<div className="titleContainer__concernLine" style={isInit ? (beforeCss) : (afterCss)}></div>)
}