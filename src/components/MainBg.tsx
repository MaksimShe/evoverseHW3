"use client";

import { getBackground } from "@/utils/getBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import { BetControls } from "@/components/BetControls";
import { SpinButton } from "@/components/SpinButton";
import cn from "classnames";
import dynamic from "next/dynamic";

export const MainBg = () => {
  const imgBg = {
    crown: getBackground("crown"),
    lemon: getBackground("lemon"),
    liftCoin: getBackground("liftCoin"),
    seven: getBackground("seven"),
    smileCoin: getBackground("smileCoin"),
    city: getBackground("city"),
  };

  const SlotMachine = dynamic(() => import("@/components/offSSR/StotMachine.client"), {
    ssr: false,
  });

  return (
    <main className="w-screen relative flex-1">
      <div className={cn("absolute -bottom-6 left-0 w-full h-[200px]")}>
        <Image src={imgBg.city} alt='cityBg' fill className='object-cover object-center'/>
      </div>
      <div className="pointer-events-none">
        <motion.div
          animate={{ x: [0, -10, 0], y: [0, 6, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className='w-16 h-16 absolute right-4 top-28'
        >
          <Image src={imgBg.crown} alt="crown" fill className='object-cover'/>
        </motion.div>

        <motion.div
          animate={{ x: [0, -14, 0], y: [0, 10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-16 h-16 absolute top-72 left-2/5"
        >
          <Image src={imgBg.lemon} alt="lemon" fill className="object-cover" />
        </motion.div>

        <motion.div
          animate={{ x: [0, -12, 0], y: [0, 8, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-16 h-16 absolute right-4 -top-28"
        >
          <Image src={imgBg.lemon} alt="lemon" fill className="object-cover" />
        </motion.div>

        <motion.div
          animate={{ x: [0, -9, 0], y: [0, 5, 0] }}
          transition={{
            duration: 6.4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-16 h-16 absolute left-4/6"
        >
          <Image src={imgBg.smileCoin} alt="smile coin" fill className="object-cover" />
        </motion.div>

        <motion.div
          animate={{ x: [0, -11, 0], y: [0, 7, 0] }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-16 h-16 absolute -left-2"
        >
          <Image src={imgBg.seven} alt="seven" fill className="object-cover" />
        </motion.div>

        <motion.div
          animate={{ x: [0, -10, 0], y: [0, 6, 0] }}
          transition={{
            duration: 6.1,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-16 h-16 absolute right-1 top-64"
        >
          <Image src={imgBg.liftCoin} alt="lift coin" fill className="object-cover" />
        </motion.div>

        <motion.div
          animate={{ x: [0, 15, -12, 0], y: [0, 6, -4, 0] }}
          transition={{
            duration: 7.2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-16 h-16 absolute top-4 left-24"
        >
          <Image src={imgBg.liftCoin} alt="lift coin" fill className="object-cover" />
        </motion.div>
      </div>

      <section className='flex flex-col items-center gap-6 mt-8'>
        <SlotMachine />
        <BetControls />
        <SpinButton />
      </section>
    </main>
  );
};
