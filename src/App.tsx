import {Canvas, useFrame} from '@react-three/fiber'
import styled from "styled-components";
import Model from "./components/Model.tsx";
import Light from "./components/Light.tsx";
import {Vector3} from "three";

export default function App() {
    const Container = styled.div`
        width: 100dvw;
        height: 100dvh;`

    const vec = new Vector3()
    const Rig = () => {
        return useFrame(({camera, pointer}) => {
            vec.set(pointer.x * 2, Math.abs(pointer.y) * 2, camera.position.z)
            camera.position.lerp(vec, 0.025)
            camera.lookAt(0, 0, 0)
        })
    }
    return (
        <Container id="canvas-container">
            <Canvas  shadows camera={{ position: [0, 0, 5], fov: 25 }} >
                <Model modelUrl="/models/tsukuda_roca_fix.vrm" animationUrl="/models/VRMA_02.vrma"></Model>
                <Light></Light>
                <Rig />
            </Canvas>
        </Container>
    )
}
