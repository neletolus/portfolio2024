import "./title.scss"
import TitleSideDesign from "./title/TitleSideDesign.tsx";
import {useEffect, useState} from "react";
import TitleConcernLine from "./title/TitleConcernLine.tsx";

export default function Title() {
    const [isInit, setIsInit] = useState(true)
    useEffect(() => {
        setIsInit(false)
    }, []);
    return (
        <div className="titleContainer">
            <div className="titleContainer__box">
                <div>
                    <TitleConcernLine
                        beforeCss={{top: "-100px", left: "-50px", transform: "rotate(150deg)"}}
                        afterCss={{top: "-80px", left: 0, transform: "rotate(30deg)"}}/>
                    <TitleConcernLine
                        beforeCss={{top: "-100px", right: "-100px", transform: "rotate(30deg)"}}
                        afterCss={{top: "-80px", right: 0, transform: "rotate(150deg)"}}/>
                    <TitleConcernLine
                        beforeCss={{bottom: "-100px", left: "-100px", transform: "rotate(30deg)"}}
                        afterCss={{bottom: "-80px", left: 0, transform: "rotate(150deg)"}}/>
                    <TitleConcernLine
                        beforeCss={{bottom: "-100px", right:"-100px", transform: "rotate(150deg)"}}
                        afterCss={{bottom: "-80px", right: 0, transform: "rotate(30deg)"}}/>
                </div>
                <div>
                    <TitleSideDesign beforeCss={{top: -100, left: -100}} afterCss={{top: 0, left: 0}}></TitleSideDesign>
                    <TitleSideDesign beforeCss={{top: -100, right: -100}} afterCss={{top: 0, right: 0}}></TitleSideDesign>
                    <TitleSideDesign beforeCss={{bottom: -100, left: -100}}
                                     afterCss={{bottom: 0, left: 0}}></TitleSideDesign>
                    <TitleSideDesign beforeCss={{bottom: -100, right: -100}}
                                     afterCss={{bottom: 0, right: 0}}></TitleSideDesign>
                </div>
                <h1 style={isInit ? ({opacity: 0}) : ({opacity: 1})}>Portfolio 2024</h1>
            </div>
        </div>)
}