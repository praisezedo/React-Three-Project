import { Environment, Lightformer } from "@react-three/drei"

export default function StudioLight () {
    return (

        <group name="lights">
            <Environment resolution={256} preset="studio">
            <Lightformer form= "rect" position={[10 , 5 , -5]} intensity={10} scale={100} />
            <Lightformer form= "rect" position={[-10 , 5 , -5]} intensity={10} scale={100} />
            <Lightformer form= "rect" position={[0 , 5 , -10]} intensity={10} scale={100} />
            </Environment>
        </group>
    )
}