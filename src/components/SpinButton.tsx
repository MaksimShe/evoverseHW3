'use client';

import { getBackground } from "@/utils/getBackground";
import Image from "next/image";
import cn from "classnames";
import { useSlotStore } from "@/store/useSlotStore";
import { GameStatus } from "@/types";

export const SpinButton = () => {

  const imgBtn = {
    panel: getBackground("bottomBtn", "svg", "mainPics"),
    main: getBackground("spinBtnMain", "svg", "mainPics"),
    text: getBackground("spinBtnText", "svg", "mainPics"),
    top: getBackground("spinBtnTop", "svg", "mainPics"),
  };

  const { gameStatus, setGameStatus, subtractFromBalance, bet } = useSlotStore();
  console.log(gameStatus);


  const handleClick = () => {
    if (gameStatus === GameStatus.disabled) {
      subtractFromBalance(bet);
      setGameStatus(GameStatus.playing);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="relative w-[250px] h-[150px] cursor-pointer" onClick={handleClick}>

        <Image
          src={imgBtn.main}
          alt="main"
          width={204}
          height={110}
          className={cn(
            "absolute left-[49.1%] -top-1 -translate-x-1/2 z-10",
            "w-[204px] h-[110px]",
            { "translate-y-3 transition duration-300": gameStatus !== GameStatus.disabled }
          )}
        />

        <Image
          src={imgBtn.top}
          alt="top"
          width={179}
          height={37}
          className={cn(
            "absolute left-[49.3%] -top-[2%] -translate-x-1/2 z-30",
            "w-[179px] h-[37px]",
            { "translate-y-3 transition duration-300": gameStatus !== GameStatus.disabled }
          )}
        />

        <Image
          src={imgBtn.text}
          alt="text"
          width={120}
          height={47}
          className={cn(
            "absolute left-1/2 top-[8%] -translate-x-1/2 z-40",
            "w-[120px] h-[47px]",
            { "translate-y-3 transition duration-300": gameStatus !== GameStatus.disabled }
          )}
        />

        <Image
          src={imgBtn.panel}
          alt="panel"
          width={250}
          height={150}
          className="absolute inset-0 z-20 w-[250px] h-[150px]"
        />
      </div>
    </section>
  );
};
