'use client'

import Image from 'next/image';
import appScreen from '../assets/images/app-screen.png';
import {motion,useScroll, useTransform} from "framer-motion"
import { useEffect, useRef } from 'react';

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null)
  const {scrollYProgress} = useScroll({
    target:appImage,
    offset:['start end','end end']
  });
  // dooble-checking
  // useEffect(()=>{
  //   scrollYProgress.on("change",(latestValue)=>
  //     console.log("latestValue",latestValue)
  //   )
  // },[scrollYProgress])
  const rotateX = useTransform(scrollYProgress,[0,1],[15,0])
  const opacity=useTransform(scrollYProgress,[0,1],[.5,1])
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24">
      
    </div>
  );
};
