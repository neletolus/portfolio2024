import {FC, useState, useEffect} from "react"
import {GLTFLoader, GLTF} from "three/examples/jsm/loaders/GLTFLoader.js"
import {VRM, VRMLoaderPlugin, VRMUtils} from "@pixiv/three-vrm"
import {Html} from "@react-three/drei"
import {AnimationAction, AnimationMixer, Box3, Mesh, Vector3} from "three";
import FloorShadow from "./FloorShadow.tsx";
import Floor from "./Floor.tsx";
import {createVRMAnimationClip, VRMAnimation, VRMAnimationLoaderPlugin} from "@pixiv/three-vrm-animation";
import {useFrame} from "@react-three/fiber";

interface ModelProps {
    modelUrl: string,
    animationUrl: string
}

const Model: FC<ModelProps> = ({modelUrl, animationUrl}: ModelProps) => {
    const [gltf, setGltf] = useState<GLTF>()
    let currentVRM: VRM | null = null
    let currentAnimation: VRMAnimation | null = null
    let currentMixer: AnimationMixer | null = null
    const [vrmState, setVrmState] = useState<VRM>()
    const [mixerState, setMixerState] = useState<AnimationMixer>()
    const [currentAction, setCurrentAction] = useState<AnimationAction>()
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
    useFrame(({gl, scene, camera, clock}, delta) => {
        const elapsedTime = clock.getElapsedTime()
        if (mixerState) {
            mixerState.update(delta);
        }
        if (vrmState) {
            vrmState.update(delta);
        }

        if (elapsedTime > 7) {
            currentAction!.paused = true
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
            setCurrentAction(action)
            action.play()
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
                    <primitive object={gltf.scene}/>
                    <FloorShadow modelPosition={gltf.scene.position}></FloorShadow>
                    <Floor modelPosition={gltf.scene.position}></Floor>
                </>
            ) : (
                <Html center>{progress} % loaded</Html>
            )}
        </>
    )
}

export default Model