"use client";

import { getBackground } from "@/utils/getBackground";
import Image from "next/image";
import { useSlotStore } from "@/store/useSlotStore";
import cn from "classnames";
import { GameStatus } from "@/types";

export const BetControls = () => {
  const icons = {
    plus: getBackground("plus", "svg", "mainPics"),
    minus: getBackground("minus", "svg", "mainPics"),
    betBg: getBackground("bet", "svg", "mainPics"),
  };

  const { bet, setBet, balance, gameStatus } = useSlotStore();

  const isDisabled = gameStatus !== GameStatus.disabled;
  const minBet = 10;
  const betStep = 10;

  const normalizeBet = (value: number) => {
    if (value < minBet) return minBet;
    if (value > balance) return balance;
    return value;
  };

  const onAdd = () => {
    if (isDisabled) return;
    setBet(normalizeBet(bet + betStep));
  };

  const onSubtract = () => {
    if (isDisabled) return;
    setBet(normalizeBet(bet - betStep));
  };

  const onInputChange = (value: number) => {
    if (isDisabled) return;
    setBet(normalizeBet(value));
  };

  return (
    <div className={cn("flex gap-4 z-20", { "opacity-55": isDisabled })}>

      <button onClick={onSubtract} disabled={isDisabled}>
        <Image
          src={icons.minus}
          alt="minus"
          width={64}
          height={64}
          className="object-contain h-16 w-16 hover:scale-[103%] active:translate-y-1 disabled:opacity-50"
        />
      </button>

      <div className={cn("relative", { "opacity-55": balance < minBet })}>
        <input
          type="number"
          value={bet}
          onChange={(e) => onInputChange(Number(e.target.value))}
          className="absolute text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-[Bungee] w-[185px] h-[62px] rounded-2xl"
        />
        <Image
          src={icons.betBg}
          alt="bet background"
          width={194}
          height={64}
          className="object-contain h-16 w-[194px]"
        />
      </div>

      <button onClick={onAdd} disabled={isDisabled}>
        <Image
          src={icons.plus}
          alt="plus"
          width={64}
          height={64}
          className="object-contain h-16 w-16 hover:scale-[103%] active:translate-y-1 disabled:opacity-50"
        />
      </button>
    </div>
  );
};
