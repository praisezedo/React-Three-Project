import gameVideo from '../public/videos/game.mp4';
import maskLogo from '../public/mask-logo.svg'
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function Showcase() {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });
            timeline.to('.mask img' , {
             transform: 'scale(2)'
            }).to('.content' , {opacity: 1 , y: 10 , ease: 'power1.in'});
        }
    }, [isTablet])
    return (
<section id="showcase">
<div className="media">
 <video src={gameVideo} loop muted autoPlay playsInline/>
 <div className='mask'>
 <img src={maskLogo}/>
 </div>
</div>

<div className='content'>
 <div className='wrapper'>
    <div className='lg:max-w-md'>
        <h2>Rocket Chip</h2>
        <div className='space-y-5 mt-7 pe-10'>
            <p>
                Introducing {" "}
                <span className='text-white'>
                    M4 , the next generation of Apple silicon
                </span>
                . M4 powers
            </p>
            <p>
              Phenomenal single- and multithreaded CPU performance, faster unified memory, enhanced machine learning accelerators — the M4 family of chips gives you the kind of speed and capability you’ve never thought possible. And the powerful Neural Engine makes AI tasks like image upscaling and video caption creation fly.  
            </p>
            <p>Phenomenal single- and multithreaded CPU performance, faster unified memory, enhanced machine learning accelerators — the M4 family of chips gives you the kind of speed and capability you’ve never thought possible. And the powerful Neural Engine makes AI tasks like image upscaling and video caption creation fly.</p>
            <p className='text-primary'>Learn more about apple Intel</p>
        </div>
    </div>
    <div className='max-w-3xs space-y-14'>
        <div className='space-y-2'>
            <p>Up to</p>
            <h3>4x faster</h3>
            <p>pro rendering performance than M2</p>
        </div>

        <div className='space-y-2'>
            <p>Up to</p>
            <h3>1.5x faster</h3>
            <p>CPU performance than M2</p>
        </div>
    </div>
 </div>
</div>
</section>
    );
}
export default Showcase