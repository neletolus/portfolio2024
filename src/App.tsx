import {Canvas, useFrame} from '@react-three/fiber'
import Model from "./components/Three/Model.tsx";
import DirLight from "./components/Three/DirLight.tsx";
import {Euler, Vector3} from "three";
import "./app.scss"
import ColoredBox from "./components/Three/ColoredBox.tsx";
import AmbLight from "./components/Three/AmbLight.tsx";
import WireBox from "./components/Three/WireBox.tsx";

export default function App() {

    const vec = new Vector3()
    const Rig = () => {
        return useFrame(({camera, pointer}) => {
            vec.set(pointer.x * 2, Math.abs(pointer.y) * 2, camera.position.z)
            camera.position.lerp(vec, 0.025)
            camera.lookAt(0, 0, 0)
        })
    }
    return (
        <div id="canvas-container">
            <Canvas  shadows camera={{ position: [0, 0, 5], fov: 25 }}>
                <WireBox position={new Vector3(0,0,0)} rotation={new Euler(0,0,0)} materialColor={"#ffffff"}/>
                <ColoredBox position={new Vector3(-0.8,0.5,-1)} rotation={new Euler(0,0,0)} materialColor={"#000000"}/>
                <ColoredBox position={new Vector3(0.8,0.2,-1)} rotation={new Euler(0,0,1)} materialColor={"#FE7171"}/>
                <Model modelUrl="/models/vj_takagi.vrm" animationUrl="/models/VRMA_05.vrma"></Model>
                <DirLight></DirLight>
                <AmbLight></AmbLight>
                <Rig />
            </Canvas>
        </div>
    )
}
