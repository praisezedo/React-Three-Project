import Hero from "./components/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase.jsx";

gsap.registerPlugin(ScrollTrigger)
export default function App() {
   return (
    <>
  <NavBar/>
  <Hero/>
  <ProductViewer/>
  <Showcase/>
    </>
   );
}
