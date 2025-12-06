'use client';

import { HeaderBg } from "@/components/HeaderBg";
import { MainBg } from "@/components/MainBg";
import { FooterBg } from "@/components/FooterBg";
import { useSlotStore } from "@/store/useSlotStore";
import { GameStatus } from "@/types";
import { LoseModal } from "@/components/LoseModal";
import {WinModal} from "@/components/WinModal";

export const MainApp = () => {
  const { gameStatus } = useSlotStore();
  return (
    <div className="flex flex-col min-h-screen bg-[#DAF3A6] -z-50 ">
      {
        gameStatus === GameStatus.lose &&
        <LoseModal />
      }
      {
        gameStatus === GameStatus.win &&
        <WinModal />
      }
      <HeaderBg />

      <MainBg />

      <FooterBg />
    </div>
  );
}