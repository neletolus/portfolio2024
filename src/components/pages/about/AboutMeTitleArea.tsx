import {Link} from "react-router-dom";

export default function AboutMeTitleArea() {
    return (
        <div className="titleArea">
            <Link className="titleLink" to={"/"}></Link>
            <h1>About Me</h1>
        </div>
    )
}