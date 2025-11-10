import { PresentationControls } from "@react-three/drei";
import { useRef } from "react"
import Macbook16 from "../../model/Macbook-16.jsx"
import gsap from "gsap"
import Macbook14 from '../../model/Macbook-14.jsx'
import {useGSAP} from '@gsap/react'

const AMIMATION_DURATION = 1;
const OFFSET_DISTANCE = 27;
const SCALE_LARGE_DESKTOP = 0.08;
const SCALE_LARGE_MOBILE = 0.05;
const fadMeshes = (group , opacity) => {
    if(!group || !group.traverse) return;
  group.traverse((child) => {
  if (child.isMesh) {
            gsap.to(child.material , {opacity , duration: AMIMATION_DURATION});
        }
    })
}
const moveGroup = (group , x) => {
    if(!group) return;

    gsap.to(group.position , {x , duration: AMIMATION_DURATION})
}
function ModelSwitchers({scale , isMobile}) {

  const  smallmacbookref = useRef();
  const largemacbookref = useRef();
  const showlargemacbook = scale === SCALE_LARGE_MOBILE || scale === SCALE_LARGE_DESKTOP;

  useGSAP(() => {
   if(showlargemacbook) {
   moveGroup(smallmacbookref.current, -OFFSET_DISTANCE)
    moveGroup(largemacbookref.current , 0)

    fadMeshes(smallmacbookref.current , 0)
    fadMeshes(largemacbookref.current, 1)
    
   }
   else {
   moveGroup(smallmacbookref.current, 0)
    moveGroup(largemacbookref.current , OFFSET_DISTANCE)

    fadMeshes(smallmacbookref.current , 1)
    fadMeshes(largemacbookref.current, 0)
 }
  },[scale])
  const controlconfig = {
    snap: true,
    speed: 1,
     polar: [-Math.PI , Math.PI],
     zoom: 1,
     azimuth: [-Infinity , Infinity],
}
    return (
        <>
<PresentationControls {...controlconfig}>
    <group ref={smallmacbookref} >
<Macbook14 scale={isMobile ? 0.3 : 0.6}/>
    </group>
</PresentationControls>

<PresentationControls {...controlconfig}>
    <group ref={largemacbookref}>
<Macbook16 scale={isMobile ? 0.5  : 0.8}/>
    </group>
</PresentationControls>
        </>
    )
}
export default ModelSwitchers;