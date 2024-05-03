import { useRef } from "react";
import {Euler, Mesh, Vector3} from "three";

type Props = {
    position: Vector3,
    rotation: Euler,
    materialColor: string
}
const ColoredBox = ({position, rotation, materialColor}: Props) => {
    const ref = useRef({} as Mesh);
    return (
        <mesh ref={ref} position={position} rotation={rotation} castShadow={true}>
            <boxGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={materialColor} />
        </mesh>
    );
};

export default ColoredBox;