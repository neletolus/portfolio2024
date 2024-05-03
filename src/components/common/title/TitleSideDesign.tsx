import {CSSProperties, useEffect, useState} from "react";


type Props = {
    beforeCss: CSSProperties,
    afterCss: CSSProperties
}
export default function TitleSideDesign({beforeCss, afterCss}: Props) {
    const [isInit, setIsInit] = useState(true)

    useEffect(() => {
        setIsInit(false)
    }, []);
    return (<div className="titleContainer__sideDesign" style={isInit ? (beforeCss) : (afterCss)}></div>)
}