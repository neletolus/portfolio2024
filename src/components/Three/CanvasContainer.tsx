import {Canvas, useFrame} from '@react-three/fiber'
import ModelCreator from "./ModelCreator.tsx";
import DirLight from "./parts/light/DirLight.tsx";
import {Vector3} from "three";
import "./canvasContainer.scss"
import AmbLight from "./parts/light/AmbLight.tsx";
import Effects from "./parts/effect/Effect.tsx";

export default function CanvasContainer() {

    const vec = new Vector3()
    const Rig = () => {
        return useFrame(({camera, pointer}) => {
            vec.set(pointer.x * 2, Math.abs(pointer.y) * 2, camera.position.z)
            camera.position.lerp(vec, 0.025)
            camera.lookAt(0, 0, 0)
        })
    }
    return (
        <div className="canvasContainer">
            <Canvas  shadows camera={{ position: [0, 0, 5], fov: 30 }}>
                <ModelCreator modelUrl="/models/tsukuda_roca_fix.vrm" animationUrl="/models/VRMA_02.vrma"></ModelCreator>
                <DirLight></DirLight>
                <AmbLight></AmbLight>
                <Rig />
                <Effects></Effects>
            </Canvas>
        </div>
    )
}
