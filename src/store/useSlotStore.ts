'use client';

import { create } from 'zustand';
import { BalanceState, GameStatus } from "@/types";

export const useSlotStore = create<BalanceState>()(
    (set) => ({
      balance: 1000,
      addToBalance: (howMuch) =>
        set((state) => ({ balance: state.balance + howMuch })),

      subtractFromBalance: (howMuch) =>
        set((state) => ({ balance: state.balance - howMuch })),

      bet: 10,
      setBet: (bet) => set({ bet }),

      gameStatus: GameStatus.disabled,
      setGameStatus: (gameStatus: GameStatus) => set({ gameStatus }),

      lastWinSum: 0,
      setLastWinSum: (lastWinSum: number) => set({ lastWinSum }),
    })
);
