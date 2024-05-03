import MainLink from "./link/MainLink.tsx";
import "./mainlinks.scss"
import {LocationType} from "./link/LocationType.ts";

export default function MainLinks() {
    return (
        <div className="mainLinks">
            <MainLink linkPath="/works" linkText="WORKS"
                      locationType={LocationType.TOPLEFT}
            />
            <MainLink linkPath="/about" linkText="ABOUT ME"
                      locationType={LocationType.TOPRIGHT}
            />
            <MainLink linkPath="/links" linkText="LINKS"
                      locationType={LocationType.BOTTOMRIGHT}
            />
            <MainLink linkPath="/concept" linkText="CONCEPT"
                      locationType={LocationType.BOTTOMLEFT}
            />
        </div>
    )
}