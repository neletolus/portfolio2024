import "./app.scss"
import CanvasContainer from "./components/Three/CanvasContainer.tsx";
import Title from "./components/common/Title.tsx";
import Background from "./components/common/Background.tsx";

export default function App() {
    return (
        <div className="app">
            <Background></Background>
            <Title></Title>
            <CanvasContainer />
        </div>
    )
}
