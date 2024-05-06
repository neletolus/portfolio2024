import "./app.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLinks from "./components/common/MainLinks.tsx";
import Home from "./components/pages/Home.tsx";
import Works from "./components/pages/Works.tsx";
import Links from "./components/pages/Links.tsx";
import AboutMe from "./components/pages/AboutMe.tsx";
import Concept from "./components/pages/Concept.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <MainLinks/>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/works"} element={<Works />} />
                    <Route path={"/about"} element={<AboutMe />} />
                    <Route path={"/links"} element={<Links />} />
                    <Route path={"/concept"} element={<Concept />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
