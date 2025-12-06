'use client'

import { getBackground } from "@/utils/getBackground";
import Image from "next/image";
import { useSlotStore } from "@/store/useSlotStore";
import cn from "classnames";
import { GameStatus } from "@/types";

export const BetControls = () => {
  const controlsIIcons = {
    plus: getBackground('plus', 'svg', 'mainPics'),
    minus: getBackground('minus', 'svg', 'mainPics'),
    betBg: getBackground('bet', 'svg', 'mainPics'),
  }

  const { bet, setBet, balance, gameStatus } = useSlotStore();

  const onAdd = () => {
    if (bet + 10 > balance) {
      setBet(balance);
      return;
    }
    setBet(bet + 10);
  }

  const onSubtract = () => {
    if (bet <= 20) {
      setBet(10);
      return;
    }
    setBet(bet - 10);
  }

  const handleInputBet = (number: number) => {
    if (number < 1) {
      setBet(1);
    } else if (number > balance) {
      setBet(balance);
    } else {
      setBet(number);
    }
  }

  return (
    <div className={cn("flex gap-4 z-20", {"opacity-55": gameStatus !== GameStatus.disabled})}>
      <div onClick={() => gameStatus === GameStatus.disabled && onSubtract()} >
        <Image
          src={controlsIIcons.minus}
          alt='minus'
          width={64}
          height={64}
          className="object-contain h-16 w-16 hover:scale-[103%] active:translate-y-1 cursor-pointer"
        />
      </div>
      <div className={cn("relative", {'opacity-55' : balance < 10})}>
        <input
          type="number"
          className="absolute text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-[Bungee] w-[185px] h-[62px] rounded-2xl"
          value={bet ?? ''}
          onChange={e =>
            gameStatus === GameStatus.disabled &&
            handleInputBet(Number(e.target.value))}
        />
        <Image
          src={controlsIIcons.betBg}
          alt="betBg"
          width={194}
          height={64}
          className="object-contain h-16 w-[194px]"
        />
      </div>

      <div onClick={() => gameStatus === GameStatus.disabled && onAdd()} >
        <Image
          src={controlsIIcons.plus}
          alt='plus'
          width={64}
          height={64}
          className="object-contain h-16 w-16 hover:scale-[103%] active:translate-y-1 cursor-pointer"
        />
      </div>
    </div>
  )
}