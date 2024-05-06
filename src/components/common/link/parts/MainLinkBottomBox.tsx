import {CSSProperties, useEffect, useState} from "react";

type Props = {
    beforeCss: CSSProperties,
    afterCss: CSSProperties
}
export default function MainLinkBottomBox({beforeCss, afterCss}: Props) {
    const [isInit, setIsInit] = useState(true)
    useEffect(() => {
        setIsInit(false)
    }, []);
    return (<div className="mainLink__box" style={isInit ? (beforeCss) : (afterCss)}></div>)
}