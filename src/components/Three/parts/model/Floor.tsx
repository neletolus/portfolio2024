import {Vector3} from "three";

type Props = {
    modelPosition: Vector3
}
export default function Floor({modelPosition}: Props) {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}
              position={[0, modelPosition.y - 0.01, 0]} receiveShadow={true}>
            <circleGeometry args={[1.5, 64]}/>
            <meshStandardMaterial color={"#FFF5D6"}/>
        </mesh>
    )
}
