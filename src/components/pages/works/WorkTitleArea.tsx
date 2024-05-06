import {Link} from "react-router-dom";

export default function WorkTitleArea() {
    return (
        <div className="titleArea">
            <Link className="titleLink" to={"/"}></Link>
            <h1>Works</h1>
        </div>
    )
}