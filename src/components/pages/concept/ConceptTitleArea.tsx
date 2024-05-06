import {Link} from "react-router-dom";

export default function ConceptTitleArea() {
    return (
        <div className="titleArea">
            <Link className="titleLink" to={"/"}></Link>
            <h1>Concept</h1>
        </div>
    )
}