import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { performanceImages } from "../Constants/NavLink.js";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);

export default function Performance() {
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'});
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef); // scoped selector
      const isDesktop = window.innerWidth > 1024;

      // Text animation - fade in and move up (scoped)
      gsap.fromTo(
        q(".content p"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: q(".content")[0],
            start: "top bottom",
            end: "top center",
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
          },
          ease: 'power2.out',
        }
      );

      // Desktop: single scrubbed timeline for all images (skip p5)
      if (isDesktop) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
          },
        });

        performanceImages.forEach((styles) => {
          const { id } = styles;
          if (id === "p5") return; // skip p5

          const imgEl = q(`.${id}`)[0]; // scoped element
          if (!imgEl) return;

          // Ensure initial state: hidden, keep current layout or slight offset if desired
          tl.set(imgEl, { opacity: 0 }, 0);

          // Apply final CSS positions and transform at time 0 (all images animate along same timeline)
          tl.to(
            imgEl,
            {
              opacity: 1,
              // put CSS positions under `css` so GSAP updates style left/right/bottom/transform
              css: {
                left: styles.left ?? undefined,
                right: styles.right ?? undefined,
                bottom: styles.bottom ?? undefined,
                transform: styles.transform ?? undefined,
              },
              duration: 1,
              ease: "none",
            },
            0
          );
        });
      }

      // Refresh ScrollTrigger on window resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        // kill timeline and all triggers created inside this scope
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section id="performance" ref={sectionRef}>
        <h2>Next-level graphics performance. Game on.</h2>
        <div className="wrapper">
          {performanceImages.map(({ id, src }) => (
            <img key={id} className={id} src={src} alt={id} />
          ))}
        </div>
        <div className="content">
          <p>
            Run graphics-intensive workflows with a responsiveness that keeps
            up with your imagination. The M4 family of chips features a GPU
            with a second-generation hardware-accelerated ray tracing engine
            that renders images faster,{" "}
            <span className="text-white">
              so gaming feels more immersive and realistic than ever.
            </span>{" "}
            And Dynamic Caching optimizes fast on-chip memory to dramatically
            increase average GPU utilization — driving a huge performance boost
            for the most demanding pro apps and games.
          </p>
        </div>
      </section>
    </>
  );
}