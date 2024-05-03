import "./background.scss"
import RandomizeLine from "./background/RandomizeLine.tsx";
export default function Background() {
    return (
        <div className="background">
            <div className="background__concernLineContainer">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="background__randomizeLine black">
                <RandomizeLine></RandomizeLine>
                <RandomizeLine></RandomizeLine>
                <RandomizeLine></RandomizeLine>
                <RandomizeLine></RandomizeLine>
                <RandomizeLine></RandomizeLine>
            </div>
            <div className="background__randomizeLine red">
                <RandomizeLine></RandomizeLine>
                <RandomizeLine></RandomizeLine>
                <RandomizeLine></RandomizeLine>
                <RandomizeLine></RandomizeLine>
                <RandomizeLine></RandomizeLine>
            </div>
        </div>)
}