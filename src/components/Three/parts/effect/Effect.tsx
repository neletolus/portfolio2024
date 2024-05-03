import {DotScreen, EffectComposer} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";


export default function Effects() {
    return (
        <EffectComposer>
            <DotScreen
                blendFunction={BlendFunction.NORMAL}
                angle={Math.PI * 0.5}
                scale={5.0}
            />
        </EffectComposer>
    );
}
