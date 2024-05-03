import {Canvas, useFrame} from '@react-three/fiber'
import DirLight from "./parts/light/DirLight.tsx";
import {Euler, Vector3} from "three";
import "./canvasContainer.scss"
import AmbLight from "./parts/light/AmbLight.tsx";
import Effects from "./parts/effect/Effect.tsx";
import ColoredBox from "./parts/model/ColoredBox.tsx";
import Floor from "./parts/model/Floor.tsx";
import { useState} from "react";

export default function CanvasContainer() {
    const aspect = window.innerWidth / window.innerHeight;
    let fov = 40;
    if (aspect > 1) {
        fov = 40;
    } else if (aspect > 0.8) {
        fov = 55;
    } else if (aspect > 0.6) {
        fov = 70;
    } else if (aspect > 0.5) {
        fov = 80;
    } else {
        fov = 90;
    }
    const vec = new Vector3()

    const [mScreenX, setMScreenX] = useState(0)
    const [mScreenY, setMScreenY] = useState(0)

    document.onmousemove = (e: MouseEvent) => {
        setMScreenX((e.x / window.innerWidth - 0.5) * 2)
        setMScreenY((e.y / window.innerHeight - 0.5) * 2)
    }

    const Rig = () => {
        return useFrame(({camera}) => {
            vec.set(mScreenX * 2, Math.abs(mScreenY) * 2, camera.position.z)
            camera.position.lerp(vec, 0.025)
            camera.lookAt(0, 0, 0)
        })
    }

    return (
        <div className="canvasContainer">
            <Canvas  shadows camera={{ position: [0, 5, 5], fov: fov }}>
                <ColoredBox position={new Vector3(-0.8,0.5,0)} rotation={new Euler(1,0,0)} materialColor={"#cccccc"}/>
                <ColoredBox position={new Vector3(0.8,0.2,0)} rotation={new Euler(0,0,1)} materialColor={"#FE7171"}/>
                <Floor></Floor>
                <DirLight></DirLight>
                <AmbLight></AmbLight>
                <Rig />
                <Effects></Effects>
            </Canvas>
        </div>
    )
}
