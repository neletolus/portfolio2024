import {ReactElement} from "react";
import {logotype} from "../../logotype.ts"
import supabase from "../../logo/supabase.svg"
import vercel from "../../logo/vercel.svg"
import nextjs from "../../logo/nextjs.svg"
import gas from "../../logo/gas.svg"
import wordpress from "../../logo/wordpress.svg"
import html from "../../logo/html.svg"
import css from "../../logo/css.svg"
import javascript from "../../logo/javascript.svg"
import recording from "../../logo/recording.svg"
import blender from "../../logo/blender.svg"
import vroid from "../../logo/vroid.png"
import figma from "../../logo/figma.svg"
import affinityphoto from "../../logo/affinityphoto.svg"
import affinitydesigner from "../../logo/affinitydesigner.svg"
import three from "../../logo/three.svg"
import nodejs from "../../logo/nodejs.svg"
import kotlin from "../../logo/kotlin.svg"
import aws from "../../logo/aws.svg"
import selenium from "../../logo/selenium.png"

type Props = {
    title: string,
    titleUrl: string,
    date: string | null,
    linkUrl: string | null,
    linkText: string,
    description: ReactElement,
    icons: logotype[],
}
export default function AboutMeInfo({title, titleUrl, date, linkUrl, linkText, description, icons}: Props) {
    const iconList = icons.map((icon, index) => {
        switch (icon) {
            case logotype.SUPABASE:
                return (<li key={index}>
                    <span className="tooltip">Supabase</span>
                    <img src={supabase} alt="supabase logo"/>
                </li>);
            case logotype.VERCEL:
                return (<li key={index}>
                    <span className="tooltip">Vercel</span>
                    <img src={vercel} alt="vercel logo"/>
                </li>);
            case logotype.NEXTJS:
                return (<li key={index}>
                    <span className="tooltip">Next.js</span>
                    <img src={nextjs} alt="nextjs logo"/>
                </li>);
            case logotype.GAS:
                return (<li key={index}>
                    <span className="tooltip">Google Apps Script</span>
                    <img src={gas} alt="gas logo"/>
                </li>);
            case logotype.WORDPRESS:
                return (<li key={index}>
                    <span className="tooltip">Wordpress</span>
                    <img src={wordpress} alt="wordpress logo"/>
                </li>);
            case logotype.HTML:
                return (<li key={index}>
                    <span className="tooltip">HTML</span>
                    <img src={html} alt="html logo"/>
                </li>);
            case logotype.CSS:
                return (<li key={index}>
                    <span className="tooltip">CSS</span>
                    <img src={css} alt="css logo"/>
                </li>);
            case logotype.JAVASCRIPT:
                return (<li key={index}>
                    <span className="tooltip">JavaScript</span>
                    <img src={javascript} alt="javascript logo"/>
                </li>);
            case logotype.RECORDING:
                return (<li key={index}>
                    <span className="tooltip japanese">作曲スキル</span>
                    <img src={recording} alt="recording logo"/>
                </li>);
            case logotype.BLENDER:
                return (<li key={index}>
                    <span className="tooltip">Blender</span>
                    <img src={blender} alt="blender logo"/>
                </li>);
            case logotype.VROID:
                return (<li key={index}>
                    <span className="tooltip">VRoid Studio</span>
                    <img src={vroid} alt="vroid studio logo"/>
                </li>);
            case logotype.FIGMA:
                return (<li key={index}>
                    <span className="tooltip">Figma</span>
                    <img src={figma} alt="figma logo"/>
                </li>);
            case logotype.AFFINITYPHOTO:
                return (<li key={index}>
                    <span className="tooltip">Affinity Photo</span>
                    <img src={affinityphoto} alt="affinity photo logo"/>
                </li>);
            case logotype.AFFINITYDESIGNER:
                return (<li key={index}>
                    <span className="tooltip">Affinity Designer</span>
                    <img src={affinitydesigner} alt="affinity designer logo"/>
                </li>);
            case logotype.THREE:
                return (<li key={index}>
                    <span className="tooltip">Three.js</span>
                    <img src={three} alt="three.js logo"/>
                </li>);
            case logotype.NODEJS:
                return (<li key={index}>
                    <span className="tooltip">Node.js</span>
                    <img src={nodejs} alt="node.js logo"/>
                </li>);
            case logotype.KOTLIN:
                return (<li key={index}>
                    <span className="tooltip">Kotlin</span>
                    <img src={kotlin} alt="kotlin logo"/>
                </li>);
            case logotype.AWS:
                return (<li key={index}>
                    <span className="tooltip">AWS</span>
                    <img src={aws} alt="aws logo"/>
                </li>);
            case logotype.SELENIUM:
                return (<li key={index}>
                    <span className="tooltip">Selenium</span>
                    <img src={selenium} alt="selenium logo"/>
                </li>);
        }
    })

    return (
        <div className="aboutMeContainer__data">
            <div className="aboutMeContainer__symbols symbols">
                {date ? (<span className="blue">{date}</span>) : null}
            </div>
            <h3><a href={titleUrl} target="_blank">{title}</a></h3>
            <div className="aboutMeContainer__icons icons">
                <ul>
                    <li><h4>主な利用技術：</h4></li>
                    {iconList}
                </ul>
            </div>
            {linkUrl ? (<a href={linkUrl} target="_blank">{linkText}</a>) : null}
            <p className="aboutMeContainer__data--description">
                {description}
            </p>
        </div>
    )
}