import {useRef} from 'react'
import {AmbientLight} from 'three'

export default function AmbLight() {
    const ambLight = useRef<AmbientLight>(null!);
    return (
        <ambientLight color="0x666666" ref={ambLight}/>
    )
}
