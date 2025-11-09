import MackBookTitle from '../public/title.png'
import HeroVideo from '../public/videos/hero.mp4'
import { useRef , useEffect } from 'react'
function Hero() {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) {videoRef.current.playbackRate = 2};
    },[]);
return (
<>
<section id="hero">
    <div>
        <h1>MacBook Pro</h1>
        <img src={MackBookTitle} alt='Mackbooktitle'/>
    </div>
    <video ref={videoRef} src={HeroVideo} autoPlay muted playsInline/>
    <button>Buy</button>
    <p>From $1599 to $133/month for 12 months</p>
</section>
</>
);
}
export default Hero