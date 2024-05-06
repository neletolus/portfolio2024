import {CSSProperties, useEffect, useState} from "react";

type Props = {
    beforeCss: CSSProperties,
    afterCss: CSSProperties,
    isVertical: boolean,
}
export default function MainLinkSideLine({beforeCss, afterCss, isVertical}: Props) {
    const [isInit, setIsInit] = useState(true)
    useEffect(() => {
        setIsInit(false)
    }, []);
    return (
        <div className={isVertical ? ("mainLink__sideLine vertical") :
            ("mainLink__sideLine horizontal")}
             style={isInit ? (beforeCss) : (afterCss)}
        >
        </div>
    )
}