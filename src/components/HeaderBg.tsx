'use client'

import { getBackground } from "@/utils/getBackground";
import Image from "next/image";
import {useSlotStore} from "@/store/useSlotStore";
import cn from "classnames";

export const HeaderBg = () => {
  const bgImg = {
    headerBg: getBackground("header"),
    headerName: getBackground("headerName"),
    goBack: getBackground("coin"),
    aboutBtn: getBackground("aboutBtn"),
  }
  const { hasSound, changeSound } = useSlotStore();

  return (
    <header className="w-full relative flex justify-center h-16">
      <div className="absolute inset-0">
        <Image
          src={bgImg.headerBg}
          alt="headerBg"
          fill
          className="object-cover object-bottom"
        />
      </div>
      <div className="absolute h-28 flex gap-8 items-center">
        <Image
          src={bgImg.goBack}
          alt="Go Back"
          width={64}
          height={64}
          className={cn("object-contain h-16 w-16 hover:scale-110", {'opacity-45' : !hasSound})}
          onClick={changeSound}
        />
        <div className="flex justify-center items-center">
          <Image src={bgImg.headerName} alt="Header Name" width={340} height={69} className="object-contain" />
          <h2
            className="absolute font-[PocketMonk] text-4xl text-[#A5DFF7] bottom-10 drop-shadow-[0_4.4px_1.4px_rgba(59,29,26)]"
          >
            Tokio Slots
          </h2>
        </div>
        <Image src={bgImg.aboutBtn} alt="About" width={64} height={64} className="object-contain h-16 w-16 hover:scale-110" />
      </div>
    </header>
  )
}