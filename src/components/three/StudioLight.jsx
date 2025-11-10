import { Environment, Lightformer } from "@react-three/drei"

export default function StudioLight () {
    return (

        <group name="lights">
            <Environment resolution={256} preset="studio">
            <Lightformer form= "rect" position={[30 , 0 , -10]} intensity={10} scale={10}/>
            </Environment>
        </group>
    )
}