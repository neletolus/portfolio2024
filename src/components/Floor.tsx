import {Plane} from "@react-three/drei";
import {Vector3} from "three";

type Props = {
    modelPosition: Vector3
}
export default function Floor({modelPosition}: Props) {
    return (
        <Plane
            receiveShadow={true}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, modelPosition.y - 0.01, 0]}
            args={[10, 10]}
        >
            <meshBasicMaterial attach="material" color="0x808080" />
        </Plane>
    )
}
