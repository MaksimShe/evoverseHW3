"use client"

import { useSlotStore } from "@/store/useSlotStore";
import { GameStatus } from "@/types";

export const useSlotLogic = () => {

  const { setGameStatus, setLastWinSum, addToBalance }  = useSlotStore();

  const startGame = (sum: number) => {

    setTimeout(() => {
      if (sum === 0) {
        setGameStatus(GameStatus.lose);
      }
      else {
        setLastWinSum(sum);
        addToBalance(sum);
        setGameStatus(GameStatus.win);
      }
      endGame();
    }, 7300)
  }

  const endGame = () => {
    setTimeout(() => {
      setGameStatus(GameStatus.disabled);
    }, 2000);
  }



  return { startGame };
}