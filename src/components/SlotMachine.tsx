'use client';

import { getBackground } from "@/utils/getBackground";
import Image from "next/image";
import { Reels } from "@/components/Reels";
import { useEffect, useState } from "react";
import { generateReel } from "@/utils/generageReel";
import { useSlotStore } from "@/store/useSlotStore";
import { GameStatus } from "@/types";
import { calculateWin } from "@/utils/calculateWin";
import { useSlotLogic } from "@/hooks/useSlotLogic";
import cn from "classnames";
import { useMediaQuery } from "react-responsive";

export const widthChangeMachineSize = 440;

export const SlotMachine = () => {
  const [slot, setSlot] = useState<{[key: string]: string[]}>({one: [], two: [], tr: [], four: []});

  const { gameStatus, bet } = useSlotStore();
  const { startGame } = useSlotLogic();

  const slotImg = {
    slotMachine: getBackground('slotMachine', 'svg', 'mainPics'),
    machineBtn: getBackground('machineBtn', 'svg', 'mainPics'),
  };

  const isBigMachine = useMediaQuery({ minWidth: widthChangeMachineSize });

  const machineSize = isBigMachine ? {w: 430, h: 258} : {w: 300, h: 180};
  const leverSize = isBigMachine ? {w: 34, h: 98}: {w: 26, h: 70}

  useEffect(() => {
    if (gameStatus === GameStatus.playing) {
      const newSlot = {
        one: generateReel(),
        two: generateReel(),
        tr: generateReel(),
        four: generateReel(),
      };
      setSlot(newSlot);

      const sum = calculateWin(newSlot, bet);
      startGame(sum);
    }
  }, [gameStatus, bet]);

  return (
    <section>
      <div className="relative">
        {
          gameStatus !== GameStatus.disabled &&
          <div className="absolute left-[11%] top-[35.8%]">
            <Reels reels={slot} />
          </div>
        }

        <Image
          src={slotImg.slotMachine}
          alt='slot machine'
          height={machineSize.h}
          width={machineSize.w}
          className={`h-[${machineSize.h}px] w-[${machineSize.w}px]`}
        />
        <Image
          src={slotImg.machineBtn}
          alt='slot machine button'
          height={leverSize.h}
          width={leverSize.w}
          className={cn(
            `w-[${leverSize.w}px] h-[${leverSize.h}px] absolute -right-1 top-[7%] transition-transform duration-500 ease-in-out`,
            {
              'scale-y-[-1] translate-y-0': gameStatus === GameStatus.disabled,
              'scale-y-100 translate-y-[124px]': gameStatus !== GameStatus.disabled && isBigMachine,
              'scale-y-100 translate-y-[75px]': !isBigMachine && gameStatus !== GameStatus.disabled,
            }
          )}
        />
      </div>
    </section>
  );
};
