import Image from "next/image";
import { getBackground } from "@/utils/getBackground";
import { motion } from "framer-motion";
import {FooterBg} from "@/components/FooterBg";

export default function Home() {
  const bgImg = {
    header: getBackground("header"),
    cloadMain: getBackground("cloadMain"),
    cloadLeft: getBackground("cloadLeft"),
    cloadRight: getBackground("cloadRight"),
    balanceBg: getBackground("balanceBg"),
    cloadMainBg: getBackground("cloadMainBg"),
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#DAF3A6] -z-50">
      <main className="flex-1">
      </main>
      <FooterBg />
    </div>
  );
}
