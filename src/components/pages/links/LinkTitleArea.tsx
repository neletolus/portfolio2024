import {Link} from "react-router-dom";

export default function LinkTitleArea() {
    return (
        <div className="titleArea">
            <Link className="titleLink" to={"/"}></Link>
            <h1>Links</h1>
        </div>
    )
}