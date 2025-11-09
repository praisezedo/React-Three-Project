import Hero from "./components/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
export default function App() {
   return (
    <>
  <NavBar/>
  <Hero/>
  <ProductViewer/>
    </>
   );
}
