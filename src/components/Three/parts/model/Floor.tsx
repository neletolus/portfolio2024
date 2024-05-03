
export default function Floor() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -1, 0]} receiveShadow={true}>
            <circleGeometry args={[1.5, 64]}/>
            <meshStandardMaterial color={"#FFF5D6"}/>
        </mesh>
    )
}
