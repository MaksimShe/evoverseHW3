"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {getBackground} from "@/utils/getBackground";

export const FooterBg = () => {
  const bgImg = {
    header: getBackground("header"),
    cloadMain: getBackground("cloadMain"),
    cloadLeft: getBackground("cloadLeft"),
    cloadRight: getBackground("cloadRight"),
    balanceBg: getBackground("balanceBg"),
    cloadMainBg: getBackground("cloadMainBg"),
  };

  return (
    <footer className="relative w-full h-80 flex-shrink-0">
      <div className="absolute bottom-0 left-0 w-full h-60">
        <Image
          src={bgImg.cloadMain}
          alt="cloadMain"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-20 left-0 w-full h-[440px] -z-10">
        <Image
          src={bgImg.cloadMainBg}
          alt="cloadMainBg"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 w-full h-36 flex  justify-center">
        <span className="font-[PocketMonk] text-7xl text-black z-10">Jackpot</span>
        <Image
          className="object-contain absolute bottom-0"
          src={bgImg.balanceBg}
          alt="balanceBg"
          width={440}
          height={123}
        />
      </div>
      <motion.div
        className="absolute left-0 bottom-12 w-64 h-64"
        animate={{ x: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
      >
        <Image
          src={bgImg.cloadLeft}
          alt="cloadLeft"
          fill
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute right-0 bottom-12 w-64 h-64"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        <Image
          src={bgImg.cloadRight}
          alt="cloadRight"
          fill
          className="object-cover"
        />
      </motion.div>
    </footer>
  )
}