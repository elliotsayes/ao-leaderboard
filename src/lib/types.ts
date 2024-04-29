type Rank = number;
type ArweaveAddress = string;
type Score = number;

export type LeaderBoardRaw = {
  [key: ArweaveAddress]: Score;
};

export type LeaderBoardFlatEntry = {
  rank: Rank;
  address: ArweaveAddress;
  score: Score;
};

export type LeaderBoardFlat = LeaderBoardFlatEntry[];
