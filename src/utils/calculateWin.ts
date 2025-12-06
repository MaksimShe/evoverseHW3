type SlotState = { [key: string]: string[] };

export const calculateWin = (slot: SlotState, bet: number) => {
  const firstItem = Object.values(slot).map(arr => arr[0]);
  let multiplier = 0;

  const counts: { [key: string]: number } = {};
  firstItem.forEach(item => {
    counts[item] = (counts[item] || 0) + 1;
  });
  const sevenCounter = counts['/slots/seven.svg'] || 0;

  const maxCount = Math.max(...Object.values(counts));
  if (maxCount === 2) multiplier = 1.5;
  else if (maxCount === 3 && sevenCounter !== 3) multiplier = 5;
  else if (maxCount === 4 && sevenCounter !== 4) multiplier = 20;

  switch (sevenCounter) {
    case 3:
      multiplier = 20;
      break;
    case 4:
      multiplier = 100;
      break;
  }

  return multiplier * bet;
}