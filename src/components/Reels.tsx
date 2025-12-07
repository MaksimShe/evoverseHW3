'use client';

import { LegacyAnimationControls, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { ReelsProps } from "@/types";
import cn from "classnames";
import { useMediaQuery } from "react-responsive";
import { widthChangeMachineSize } from "@/components/SlotMachine";

export const Reels = ({ reels }: ReelsProps) => {
  const controlsOne = useAnimation();
  const controlsTwo = useAnimation();
  const controlsTr = useAnimation();
  const controlsFour = useAnimation();

  const isBigMachine = useMediaQuery({ minWidth: widthChangeMachineSize });
  const trututuSize = isBigMachine ? 64 : 36;

  useEffect(() => {
    const playSound = () => {
      const audio = new Audio('/sound/reel.wav');
      audio.volume = 0.3;
      audio.play();
    };

    const setupAnimation = (arr: string[], controls: LegacyAnimationControls, index: number) => {
      if (!arr.length) return;

      const duration = 3 + index;
      const lastIndex = arr.length - 1;
      const itemHeight = trututuSize + 20;

      // старт позиції
      controls.set({ y: -(lastIndex * itemHeight) });

      // запускаємо тікання
      let timer: NodeJS.Timeout;
      const tickInterval = duration / arr.length * 1000; // ms

      let i = 0;
      timer = setInterval(() => {
        playSound();
        i++;
        if (i >= arr.length) clearInterval(timer);
      }, tickInterval);

      // сама анімація
      controls.start({
        y: 0,
        transition: { duration, ease: "easeOut" },
      });

      return () => clearInterval(timer);
    };

    setupAnimation(reels.one, controlsOne, 0);
    setupAnimation(reels.two, controlsTwo, 1);
    setupAnimation(reels.tr, controlsTr, 2);
    setupAnimation(reels.four, controlsFour, 3);
  }, [reels]);


  const reelMap = [
    { key: 'one', items: reels.one, controls: controlsOne },
    { key: 'two', items: reels.two, controls: controlsTwo },
    { key: 'tr', items: reels.tr, controls: controlsTr },
    { key: 'four', items: reels.four, controls: controlsFour },
  ];

  return (
    <section className={cn("flex ",
      {'gap-[20.5px]' : isBigMachine},
      {'gap-[15px]' : !isBigMachine},
      )}>
      {reelMap.map(({ key, items, controls }) => (
        <div key={key} className={cn("flex justify-center overflow-hidden",
          {'w-16 h-[75px] p-2' : isBigMachine},
          {'w-11 h-14' : !isBigMachine}
        )

        }>
          <motion.div animate={controls} className="flex flex-col gap-8">
            {items.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={`flex justify-center items-start h-[${trututuSize}px] w-[${trututuSize}px]`}
              >
                <Image
                  src={item}
                  alt="item"
                  width={trututuSize}
                  height={trututuSize}
                  className={`w-auto h-auto object-contain`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};
