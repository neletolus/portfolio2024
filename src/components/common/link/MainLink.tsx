import {Link} from "react-router-dom";
import {CSSProperties, useEffect, useLayoutEffect, useState} from "react";
import "./mainlink.scss"
import MainLinkBottomBox from "./parts/MainLinkBottomBox.tsx";
import MainLinkSideLine from "./parts/MainLinkSideLine.tsx";
import {LocationType} from "./LocationType.ts";

type Props = {
    linkPath: string,
    linkText: string,
    locationType: LocationType
}
export default function MainLink({
                                     linkPath,
                                     linkText,
                                     locationType
                                 }: Props) {
    const [isInit, setIsInit] = useState(true)
    const [beforeCss, setBeforeCss] = useState<CSSProperties>({})
    const [afterCss, setAfterCss] = useState<CSSProperties>({})
    const [boxBeforeCss, setBoxBeforeCss] = useState<CSSProperties>({})
    const [boxAfterCss, setBoxAfterCss] = useState<CSSProperties>({})
    const [lineVertBeforeCss, setLineVertBeforeCss] = useState<CSSProperties>({})
    const [lineVertAfterCss, setLineVertAfterCss] = useState<CSSProperties>({})
    const [lineHorizBeforeCss, setLineHorizBeforeCss] = useState<CSSProperties>({})
    const [lineHorizAfterCss, setLineHorizAfterCss] = useState<CSSProperties>({})

    useLayoutEffect(() => {
        switch (locationType) {
            case LocationType.TOPLEFT:
                setBeforeCss({top: 0, left: 0, opacity: 0})
                setAfterCss({top: 0, left: 0, opacity: 1})
                setBoxBeforeCss({bottom: 0, left: -100})
                setBoxAfterCss({bottom: 0, left: 10})
                setLineVertBeforeCss({bottom: 100, right: 0})
                setLineVertAfterCss({bottom: 0, right: 0})
                setLineHorizBeforeCss({bottom: 0, right: 200})
                setLineHorizAfterCss({bottom: 0, right: 0})
                break;
            case LocationType.TOPRIGHT:
                setBeforeCss({top: 0, right: 0, opacity: 0})
                setAfterCss({top: 0, right: 0, opacity: 1})
                setBoxBeforeCss({bottom: 0, right: -100})
                setBoxAfterCss({bottom: 0, right: 10})
                setLineVertBeforeCss({bottom: 100, left: 0})
                setLineVertAfterCss({bottom: 0, left: 0})
                setLineHorizBeforeCss({bottom: 0, left: 200})
                setLineHorizAfterCss({bottom: 0, left: 0})
                break;
            case LocationType.BOTTOMLEFT:
                setBeforeCss({bottom: 0, left: 0, opacity: 0})
                setAfterCss({bottom: 0, left: 0, opacity: 1})
                setBoxBeforeCss({bottom: 0, left: -100})
                setBoxAfterCss({bottom: 0, left: 10})
                setLineVertBeforeCss({top: 100, right: 0})
                setLineVertAfterCss({top: 0, right: 0})
                setLineHorizBeforeCss({top: 0, right: 200})
                setLineHorizAfterCss({top: 0, right: 0})
                break;
            case LocationType.BOTTOMRIGHT:
                setBeforeCss({bottom: 0, right: 0, opacity: 0})
                setAfterCss({bottom: 0, right: 0, opacity: 1})
                setBoxBeforeCss({bottom: 0, right: -100})
                setBoxAfterCss({bottom: 0, right: 10})
                setLineVertBeforeCss({top: 100, left: 0})
                setLineVertAfterCss({top: 0, left: 0})
                setLineHorizBeforeCss({top: 0, left: 200})
                setLineHorizAfterCss({top: 0, left: 0})
                break;
        }
    }, [])

    useEffect(() => {
        setIsInit(false)
    }, []);
    return (
        <Link
            className={locationType == LocationType.TOPLEFT ? ("mainLink topleft")
                : locationType == LocationType.TOPRIGHT ? ("mainLink topright")
                : locationType == LocationType.BOTTOMLEFT ? ("mainLink bottomleft")
                : ("mainLink bottomright")}
            style={isInit ? (beforeCss) : (afterCss)} to={linkPath}>
            <MainLinkSideLine beforeCss={lineVertBeforeCss} afterCss={lineVertAfterCss} isVertical={true}/>
            <MainLinkSideLine beforeCss={lineHorizBeforeCss} afterCss={lineHorizAfterCss} isVertical={false}/>
            <span className="mainLink__text">
                {linkText}
                <MainLinkBottomBox beforeCss={boxBeforeCss} afterCss={boxAfterCss}/>
            </span>
        </Link>
    )
}