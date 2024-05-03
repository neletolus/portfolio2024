import {FC, useState, useEffect} from "react"
import {GLTFLoader, GLTF} from "three/examples/jsm/loaders/GLTFLoader.js"
import {VRM, VRMLoaderPlugin, VRMUtils} from "@pixiv/three-vrm"
import {Html} from "@react-three/drei"
import {AnimationMixer, Box3, Euler, Mesh, Vector3} from "three";
import Floor from "./parts/model/Floor.tsx";
import {createVRMAnimationClip, VRMAnimation, VRMAnimationLoaderPlugin} from "@pixiv/three-vrm-animation";
import {useFrame} from "@react-three/fiber";
import LoadingUI from "./LoadingUI.tsx";
import ColoredBox from "./parts/model/ColoredBox.tsx";

interface ModelProps {
    modelUrl: string,
    animationUrl: string
}

const ModelCreator: FC<ModelProps> = ({modelUrl, animationUrl}: ModelProps) => {
    const [gltf, setGltf] = useState<GLTF>()
    let currentVRM: VRM | null = null
    let currentAnimation: VRMAnimation | null = null
    let currentMixer: AnimationMixer | null = null
    const [vrmState, setVrmState] = useState<VRM>()
    const [mixerState, setMixerState] = useState<AnimationMixer>()
    const [progress, setProgress] = useState<number>(0)


    useEffect(() => {
        if (!gltf) {
            const loader = new GLTFLoader()
            loader.register((parser) => {
                return new VRMLoaderPlugin(parser)
            })
            loader.register((parser) => {
                return new VRMAnimationLoaderPlugin(parser);
            });

            loader.load(
                modelUrl,
                (tmpGltf) => {
                    tryInitVRM(tmpGltf)
                    fixModelPosition(tmpGltf)
                    setGltf(tmpGltf)
                    console.log("loaded")
                },
                // called as loading progresses
                (xhr) => {
                    setProgress((xhr.loaded / xhr.total) * 100)
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
                },
                // called when loading has errors
                (error) => {
                    console.log("An error happened")
                    console.log(error)
                }
            )

            loader.load(
                animationUrl,
                (tmpGltf) => {
                    tryInitVRMA(tmpGltf)
                    console.log("animation loaded")
                },
                // called as loading progresses
                (xhr) => {
                    setProgress((xhr.loaded / xhr.total) * 100)
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
                },
                // called when loading has errors
                (error) => {
                    console.log("An error happened")
                    console.log(error)
                }
            )
        }
    }, [])

    // アニメーション
    useFrame(({gl, scene, camera}, delta) => {
        if (mixerState) {
            mixerState.update(delta);
        }
        if (vrmState) {
            vrmState.update(delta);
        }

        gl.render(scene, camera);
    })

    // VRMの読み込み
    function tryInitVRM(tmpGltf: GLTF) {
        const vrm = tmpGltf.userData.vrm;

        if (vrm != null) {
            currentVRM = vrm
            setVrmState(currentVRM!)
            VRMUtils.rotateVRM0(vrm)
            vrm.scene.traverse((obj: never) => {
                if ((obj as Mesh).isMesh) {
                    (obj as Mesh).castShadow = true;
                }
            });
        }
        initAnimationClip()
    }

    // VRMAの読み込み
    function tryInitVRMA(tmpGltf: GLTF) {
        const vrmAnimations = tmpGltf.userData.vrmAnimations;
        if (vrmAnimations == null) {
            return;
        }
        currentAnimation = vrmAnimations[0] ?? null
        initAnimationClip()
    }

    function initAnimationClip() {
        if (currentVRM && currentAnimation) {
            currentMixer = new AnimationMixer(currentVRM.scene);
            const clip = createVRMAnimationClip(currentAnimation, currentVRM);
            const action = currentMixer.clipAction(clip)
            action.play()

            setTimeout(() => {
                action.paused = true
            }, 6000)
            setMixerState(currentMixer)
        }
    }

    const fixModelPosition = (gltf: GLTF) => {
        const object = gltf.scene;
        const box = new Box3().setFromObject(object);
        const center = box.getCenter(new Vector3());
        object.position.x += (object.position.x - center.x); // gltfに入ってるオブジェクトを包含する立方体を作って、それの中心を元にセンタリングしてる・・・？
        object.position.y += (object.position.y - center.y);
        object.position.z += (object.position.z - center.z);
    }

    return (
        <>
            {gltf ? (
                <>
                    <ColoredBox position={new Vector3(-0.8,0.5,-1)} rotation={new Euler(1,0,0)} materialColor={"#cccccc"}/>
                    <ColoredBox position={new Vector3(0.8,0.2,-1)} rotation={new Euler(0,0,1)} materialColor={"#FE7171"}/>
                    <primitive object={gltf.scene}/>
                    <Floor modelPosition={gltf.scene.position}></Floor>
                </>
            ) : (
                <Html center><LoadingUI progress={progress}></LoadingUI></Html>
            )}
        </>
    )
}

export default ModelCreator