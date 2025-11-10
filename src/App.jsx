import Hero from "./components/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase.jsx";
import Performance from "./components/Performance.jsx";
import  Feature  from "./components/Feature.jsx";
import Highlights from "./components/Highlights.jsx";
gsap.registerPlugin(ScrollTrigger)
export default function App() {
   return (
    <>
  <NavBar/>
  <Hero/>
  <ProductViewer/>
  <Showcase/>
  <Performance/>
  <Feature/>
  <Highlights/>
    </>
   );
}
