"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getBackground } from "@/utils/getBackground";
import { Balance } from "@/components/Balance";
import { useMediaQuery } from 'react-responsive';

export const FooterBg = () => {
  const bgImg = {
    header: getBackground("header"),
    cloadMain: getBackground("cloadMain"),
    cloadLeft: getBackground("cloadLeft"),
    cloadRight: getBackground("cloadRight"),
    balanceBg: getBackground("balanceBg"),
    cloadMainBg: getBackground("cloadMainBg"),
    city: getBackground("city"),
  };

  const deleteSidesClouds = !useMediaQuery({ maxWidth: 900 });

  return (
    <footer className="relative w-full h-32 flex-shrink-0 z-50 pointer-events-none">
      <motion.div
        className="absolute bottom-16 left-0 w-full h-[440px]"
        animate={{y: [-3, -10, -3]}}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
      >
        <Image
          src={bgImg.cloadMainBg}
          alt="cloadMainBg"
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-60">
        <Image
          src={bgImg.cloadMain}
          alt="cloadMain"
          fill
          className="object-cover"
          priority
        />
      </div>

      <Balance />
      {
        deleteSidesClouds &&
        <>
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
            animate={{ x: [0, 10, 0], y: [0, 4, 0]}}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          >
            <Image
              src={bgImg.cloadRight}
              alt="cloadRight"
              fill
              className="object-cover"
            />
          </motion.div>
        </>
      }

    </footer>
  )
}