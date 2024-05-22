import { BalancesRaw } from "../ao/balances";

type Rank = number;
type ArweaveAddress = string;
type Score = number;

export type LeaderBoardFlatEntry = {
  rank: Rank;
  address: ArweaveAddress;
  score: Score;
};

export type LeaderBoardFlat = LeaderBoardFlatEntry[];

export function balancesRawToFlat(balancesRaw: BalancesRaw, denomination: number): LeaderBoardFlat {
  const divisor = 10 ** denomination;
  return Object.entries(balancesRaw).map(([address, score]) => ({
    address,
    score: score / divisor,
  }))
    .sort((a, b) => b.score - a.score)
    .map((entry, index) => ({
      rank: index + 1,
      ...entry,
    }));
}
