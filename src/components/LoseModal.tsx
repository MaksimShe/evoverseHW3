'use client';

import { getBackground } from "@/utils/getBackground";
import Image from "next/image";
import { useSlotStore } from "@/store/useSlotStore";

export const LoseModal = () => {
  const loseModalImg = getBackground('loseModal', 'svg', 'mainPics');
  const { bet } = useSlotStore();

  return (
     <section className="absolute top-0 left-0 h-screen w-screen z-50 flex justify-center items-center ">
       <div className="h-screen w-screen bg-[#BA562B] absolute opacity-35" />
       <div className="relative">
         <span
           className="absolute top-1/2 left-1/2 -translate-x-1/2 font-[Bungee] text-3xl text-red-500"
         >
           {bet}
         </span>
         <Image src={loseModalImg} alt="lose" width={288} height={192} className="object-contain w-72 h-48" />
       </div>
     </section>
  )
}