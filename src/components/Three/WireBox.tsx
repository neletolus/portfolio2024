import {BoxHelper, Euler, Mesh, Vector3} from "three";
import {useRef} from "react";
import {useHelper} from "@react-three/drei";

type Props = {
    position: Vector3,
    rotation: Euler,
    materialColor: string
}
const WireBox = ({position, rotation, materialColor}: Props) => {
    const ref = useRef({} as Mesh);
    useHelper(ref, BoxHelper, "#ffffff");

    return (
        <mesh ref={ref} position={position} rotation={rotation}>
            <boxGeometry args={[3, 3, 3]}/>
            <meshLambertMaterial color={materialColor} opacity={0} transparent={true}/>
        </mesh>
    );
};

export default WireBox;