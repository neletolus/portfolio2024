import "./app.scss"
import CanvasContainer from "./components/Three/CanvasContainer.tsx";
import Title from "./components/common/Title.tsx";
import Background from "./components/common/Background.tsx";
import {BrowserRouter} from "react-router-dom";
import MainLinks from "./components/common/MainLinks.tsx";

export default function App() {
    return (
        <BrowserRouter>
        <div className="app">
            <Background />
            <Title />
            <CanvasContainer />
            <MainLinks />
        </div>
        </BrowserRouter>
    )
}
