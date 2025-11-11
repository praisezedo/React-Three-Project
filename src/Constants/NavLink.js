import performanceimg1 from '../public/performance1.png'
import performanceimg2 from '../public/performance1.png'
import performanceimg3 from '../public/performance1.png'
import performanceimg4 from '../public/performance1.png'
import performanceimg5 from '../public/performance1.png'
import performanceimg6 from '../public/performance1.png'
import performanceimg7 from '../public/performance1.png'


import feature1V from '../public/videos/feature-1.mp4'
import feature2V from '../public/videos/feature-2.mp4'
import feature3V from '../public/videos/feature-3.mp4'
import feature4V from '../public/videos/feature-4.mp4'
import feature5V from '../public/videos/feature-5.mp4'

import featureicon1 from '../public/feature-icon1.svg'
import featureicon2 from '../public/feature-icon2.svg'
import featureicon3 from '../public/feature-icon3.svg'
import featureicon4 from '../public/feature-icon4.svg'
import featureicon5 from '../public/feature-icon5.svg'
export const NavLinks = [
    { label: "Store" },
    { label: "Mac" },
    { label: "iPhone" },
    { label: "Watch" },
    { label: "Vision" },
    { label: "AirPods" },
];

export const noChangeParts = [
    "Object_84",
    "Object_37",
    "Object_34",
    "Object_12",
    "Object_80",
    "Object_35",
    "Object_36",
    "Object_13",
    "Object_125",
    "Object_76",
    "Object_33",
    "Object_42",
    "Object_58",
    "Object_52",
    "Object_21",
    "Object_10",
];

export const performanceImages = [
    { id: "p1", src: performanceimg1 , pos:{
        id: "p1",
        left: 5,
        bottom: 65,
    } },
    { id: "p2", src: performanceimg2 ,  pos:{
        id: "p2",
        right: 10,
        bottom: 60,
    } },
    { id: "p3", src: performanceimg3 , pos: {
        id: "p3",
        right: -5,
        bottom: 45,
    }},
    { id: "p4", src: performanceimg4 , pos:     {
        id: "p4",
        right: -10,
        bottom: 0,
    }},
    { id: "p5", src: performanceimg5 , pos:     {
        id: "p5",
        left: 20,
        bottom: 50,
    } },
    { id: "p6", src: performanceimg6 , pos:     {
        id: "p6",
        left: 2,
        bottom: 30,
    }},
    { id: "p7", src: performanceimg7 , pos:     {
        id: "p7",
        left: -5,
        bottom: 0,
    }},
];
export  const features = [
    {
        id: 1,
        icon: featureicon1,
        highlight: "Email AI.",
        text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
        styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
    },
    {
        id: 2,
        icon: featureicon2,
        highlight: "Image AI.",
        text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
        styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
    },
    {
        id: 3,
        icon: featureicon3,
        highlight: "Summarize AI.",
        text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
        styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
    },
    {
        id: 4,
        icon: featureicon4,
        highlight: "AirDrop.",
        text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
        styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
    },
    {
        id: 5,
        icon: featureicon5,
        highlight: "Writing Tool.",
        text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
        styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
    },
];

 export const featureSequence = [
    { videoPath: feature1V, boxClass: ".box1", delay: 1 },
    { videoPath: feature2V, boxClass: ".box2", delay: 0 },
    { videoPath: feature3V, boxClass: ".box3", delay: 0 },
    { videoPath: feature4V, boxClass: ".box4", delay: 0 },
    { videoPath: feature5V, boxClass: ".box5", delay: 0 },
];

export const footerLinks = [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms of Use", link: "#" },
    { label: "Sales Policy", link: "#" },
    { label: "Legal", link: "#" },
    { label: "Site Map", link: "#" },
];


