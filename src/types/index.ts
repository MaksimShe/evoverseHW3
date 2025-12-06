export  interface BalanceState {
  balance: number;
  addToBalance: (howMuch: number) => void;
  subtractFromBalance: (howMuch: number) => void;

  bet: number;
  setBet: (bet: number) => void;

  gameStatus: GameStatus;
  setGameStatus: (gameStatus: GameStatus) => void;

  lastWinSum: number;
  setLastWinSum: (lastWinSum: number) => void;
}

export enum GameStatus {
  playing = 'playing',
  win = 'win',
  lose = 'lose',
  disabled = 'disabled',
}

export type ReelsProps = {
  reels: Record<string, string[]>
}