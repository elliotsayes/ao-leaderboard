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

export function balancesRawToFlat(balancesRaw: BalancesRaw): LeaderBoardFlat {
  return Object.entries(balancesRaw).map(([address, score]) => ({
    rank: 0,
    address,
    score: score as Score
  }))
    .sort((a, b) => b.score - a.score)
    .map((entry, index) => ({
      ...entry,
      rank: index + 1
    }));
}