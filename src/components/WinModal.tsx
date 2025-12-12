'use client';

import { getBackground } from "@/utils/getBackground";
import { motion } from "framer-motion";
import { useSlotStore } from "@/store/useSlotStore";
import Image from "next/image";

export const WinModal = () => {
  const winModalImg = getBackground('winModal', 'svg', 'mainPics');
  const winBg = getBackground('winBg');
  const { lastWinSum } = useSlotStore();

  return (
    <section className="absolute top-0 left-0 h-screen w-screen z-50 flex justify-center items-center">
      <motion.div
        className="absolute h-[220vh] w-[220vw] bg-[#A5DFF7] opacity-35"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <Image src={winBg} alt="win bg" fill />
      </motion.div>

      <div className="relative">
         <span
           className="absolute top-1/2 left-1/2 -translate-x-1/2 font-[Bungee] text-3xl text-green-500"
         >
           {lastWinSum}
         </span>
        <Image src={winModalImg} alt="lose" width={288} height={192} className="object-contain w-72 h-48" />
      </div>
    </section>
  )
}