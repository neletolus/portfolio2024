import {useRef} from 'react'
import {DirectionalLight} from 'three'

export default function DirLight() {
    const dirLight = useRef<DirectionalLight>(null!);
    return (
        <directionalLight color="0xFFFFFF" castShadow={true} intensity={2} position={[1, 1, 1]} ref={dirLight}
                   shadow-camera-near={0.1}
                   shadow-mapSize-width={4096}
                   shadow-mapSize-height={4096}
                   shadow-camera-far={20}
                   shadow-camera-left={-10}
                   shadow-camera-right={10}
                   shadow-camera-top={10}
                   shadow-camera-bottom={-10}/>
    )
}
