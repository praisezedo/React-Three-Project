
import clsx from "clsx";
import { features, featureSequence } from "../Constants/NavLink.js";
import StudioLight from "./three/StudioLight.jsx";
import { Suspense, useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import Macbook from "../model/Macbook.jsx";
import { useMediaQuery } from "react-responsive";
import { Canvas } from "@react-three/fiber";
import useMacBookStore from "../Store/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import videofeature1 from '../public/videos/feature-1.mp4'
import videofeature2 from '../public/videos/feature-2.mp4'
import videofeature3 from '../public/videos/feature-3.mp4'
import videofeature4 from '../public/videos/feature-4.mp4'
import videofeature5 from '../public/videos/feature-5.mp4'


const ModelScroll = () => {
    const groupRef = useRef(null);
    const isMobile = useMediaQuery({query: '(max-width: 1024px)'});
    const {setTexture} = useMacBookStore();

    useEffect(() => {
        featureSequence.forEach((feature) => {
            const v = document.createElement('video');
            Object.assign(v , {
                src: feature.videoPath,
                muted: true,
                playsinline: true,
                preload: 'auto',
                crossOrigin: 'anonymous',
            });
            v.load();
        })
    },[])

useGSAP(() => {
const modelTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
    }
});

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
        pin: true,
    }
})
if (groupRef.current) {
    modelTimeline.to(groupRef.current.rotation, {y: Math.PI * 2 , ease: 'power1.inOut'})
}

timeline.call(() => setTexture(videofeature1)).to('.box1' , {opacity: 1 , y: 0 , delay: 1})
.call(() => setTexture(videofeature2)).to('.box2' , {opacity: 1 , y: 0 })
.call(() => setTexture(videofeature3)).to('.box3' , {opacity: 1 , y: 0 })
.call(() => setTexture(videofeature4)).to('.box4' , {opacity: 1 , y: 0 })
.call(() => setTexture(videofeature5)).to('.box5' , {opacity: 1 , y: 0 })
},[])
    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading....</h1></Html>}>
             <Macbook scale={isMobile ? 0.05 : 0.08} position={[0 , -1 , 0]}/>
            </Suspense>
        </group>
    )
}
export default function Feature() {
    return(<>
    <section id="features">
        <h2>See it all in a new light.</h2>

        <Canvas id="f-canvas" camera={{}}>
             <StudioLight intensity={0.5}/>
             <ambientLight intensity={0.5}/>
             <ModelScroll/>
        </Canvas>

        <div className="absolute inset-0">
          {features.map((features , index) => (
           <div key={index} className={clsx('box' , `box${index + 1}` , features.styles)}>
            <img src={features.icon} alt={features.highlight}/>
            <p>
                <span className="text-white">{features.highlight}</span>
                {features.text}
            </p>
            </div>
          )
          )}
        </div>
    </section>
    </>);
}