import { create } from "zustand";
import videoTexture from '../public/videos/feature-1.mp4'


const useMacBookStore = create((set) => ({
     color: '#2e2c2e',
     setColor: (color) => set({color}),

     scale: 0.08,
     setScale: (scale) => set({scale}),

     tex: videoTexture,
     setTexture: (tex) => set({tex}),

     reset: () => set({color: '#2e2c2e' , scale: 0.08 , tex: videoTexture}) ,
}));

export default useMacBookStore;