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

  const floatingItems = [
    {
      img: imgBg.crown,
      className: "w-16 h-16 absolute right-4 top-28",
      duration: 6,
      animate: { x: [0, -10, 0], y: [0, 6, 0] },
    },
    {
      img: imgBg.lemon,
      className: "w-16 h-16 absolute top-72 left-2/5",
      duration: 4,
      animate: { x: [0, -14, 0], y: [0, 10, 0] },
    },
    {
      img: imgBg.lemon,
      className: "w-16 h-16 absolute right-4 -top-28",
      duration: 5.5,
      animate: { x: [0, -12, 0], y: [0, 8, 0] },
    },
    {
      img: imgBg.smileCoin,
      className: "w-16 h-16 absolute left-4/6",
      duration: 6.4,
      animate: { x: [0, -9, 0], y: [0, 5, 0] },
    },
    {
      img: imgBg.seven,
      className: "w-16 h-16 absolute -left-2",
      duration: 5.8,
      animate: { x: [0, -11, 0], y: [0, 7, 0] },
    },
    {
      img: imgBg.liftCoin,
      className: "w-16 h-16 absolute right-1 top-64",
      duration: 6.1,
      animate: { x: [0, -10, 0], y: [0, 6, 0] },
    },
    {
      img: imgBg.liftCoin,
      className: "w-16 h-16 absolute top-4 left-24",
      duration: 7.2,
      animate: { x: [0, 15, -12, 0], y: [0, 6, -4, 0] },
    },
  ];

  return (
    <main className="w-screen relative flex-1">
      <div className={cn("absolute -bottom-6 left-0 w-full h-[200px]")}>
        <Image src={imgBg.city} alt="cityBg" fill className="object-cover object-center" />
      </div>

      <div className="pointer-events-none">
        {floatingItems.map((item, i) => (
          <motion.div
            key={i}
            animate={item.animate}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className={item.className}
          >
            <Image src={item.img} alt="floating" fill className="object-cover" />
          </motion.div>
        ))}
      </div>

      <section className="flex flex-col items-center gap-6 mt-8">
        <SlotMachine />
        <BetControls />
        <SpinButton />
      </section>
    </main>
  );
};
