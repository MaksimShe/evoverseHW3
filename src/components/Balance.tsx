'use client';

import Image from "next/image";
import { getBackground } from "@/utils/getBackground";
import { useSlotStore } from "@/store/useSlotStore";

export const Balance = () => {
  const balanceBg = getBackground("balanceBg");
  const moneyIcon = getBackground("money");

  const { balance } = useSlotStore();

  return (
    <div className="absolute bottom-0 w-full min-[440px]:h-[150px] h-24 flex flex-col items-center">
        <Image
          className="object-contain absolute bottom-0 min-[440px]:h-[123px] w-[440px] h-[85px]"
          src={balanceBg}
          alt="balanceBg"
          width={440}
          height={123}
        />
      <h2
        className="font-[PocketMonk] min-[440px]:text-7xl text-4xl z-10 text-[#FFC434] drop-shadow-[0_4.4px_1.4px_rgba(59,29,26)]"
      >
        Balance
      </h2>
      <div className="mt-4 z-10 flex gap-4">
        <Image src={moneyIcon} alt="Money" height={24} width={24} className="h-6 w-6"/>
        <h3 className="text-white text-3xl font-[Bungee] ">
          {balance.toFixed(2)}
        </h3>
      </div>
    </div>
  )
}