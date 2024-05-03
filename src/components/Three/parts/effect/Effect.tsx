import {DotScreen, EffectComposer, Glitch } from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";
import {Vector2} from "three";


export default function Effects() {
    return (
        <EffectComposer>
            <DotScreen
                blendFunction={BlendFunction.INVERT_RGB}
                opacity={0.3}
                angle={Math.PI * 0.5}
                scale={5.0}
            />
            <Glitch
                delay={new Vector2(3.5, 3.0)}
                duration={new Vector2(0.1, 0.05)}
                strength={new Vector2(0.1, 0.1)}
                mode={GlitchMode.SPORADIC} // try CONSTANT_MILD
                active // toggle on/off
                ratio={0.1}
                columns={0.0001}
            />
        </EffectComposer>
    );
}
