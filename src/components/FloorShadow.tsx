import {Plane} from "@react-three/drei";
import {Vector3} from "three";

type Props = {
    modelPosition: Vector3
}
export default function FloorShadow({modelPosition}: Props) {
    return (
        <Plane
            receiveShadow={true}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, modelPosition.y, 0]}
            args={[1000, 1000]}
        >
            <shadowMaterial attach="material" opacity={0.3} />
        </Plane>
    )
}
