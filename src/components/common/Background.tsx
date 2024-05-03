import "./background.scss"
import RandomizeLine from "./background/RandomizeLine.tsx";
import RandomizeCircle from "./background/RandomizeCircle.tsx";

export default function Background() {
    return (
        <div className="background">
            <div className="background__concernLineContainer">
                {
                    (function () {
                        const list = [];
                        for (let i = 0; i < 4; i++) {
                            list.push(<div></div>)
                        }
                        return <>{list}</>
                    } ())
                }
            </div>
            <div className="background__randomizeLine black">
                {
                    (function () {
                        const list = [];
                        for (let i = 0; i < 10; i++) {
                            list.push(<RandomizeLine></RandomizeLine>)
                        }
                        return <>{list}</>
                    } ())
                }
            </div>
            <div className="background__randomizeLine red">
                {
                    (function () {
                        const list = [];
                        for (let i = 0; i < 10; i++) {
                            list.push(<RandomizeLine></RandomizeLine>)
                        }
                        return <>{list}</>
                    } ())
                }
            </div>
            <div className="background__randomizeCircle black">
                {
                    (function () {
                        const list = [];
                        for (let i = 0; i < 10; i++) {
                            list.push(<RandomizeCircle></RandomizeCircle>)
                        }
                        return <>{list}</>
                    } ())
                }
            </div>
            <div className="background__randomizeCircle red">
                {
                    (function () {
                        const list = [];
                        for (let i = 0; i < 10; i++) {
                            list.push(<RandomizeCircle></RandomizeCircle>)
                        }
                        return <>{list}</>
                    } ())
                }
            </div>
        </div>)
}