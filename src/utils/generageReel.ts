import { symbols } from "@/utils/symbols";

export const generateReel = () => {
  const values = Object.values(symbols);

  const count = Math.floor(Math.random() * (50 - 30 + 1)) + 30;

  const result: string[] = [];

  for (let i = 0; i < count; i++) {
    const randomItem = values[Math.floor(Math.random() * values.length)];
    result.push(randomItem);
  }

  return result;
}