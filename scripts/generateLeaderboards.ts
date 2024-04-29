
import type { BalancesRaw } from "../src/lib/ao/balances"
import { LeaderBoardFlat, balancesRawToFlat } from "../src/lib/model/table"

export async function generateLeaderboards(balances: BalancesRaw, outputPath: string): Promise<LeaderBoardFlat> {
  const leaderboardFlat = balancesRawToFlat(balances)

  const leaderboardFlatJson = JSON.stringify(leaderboardFlat)
  await Bun.write(outputPath, leaderboardFlatJson)
  
  return leaderboardFlat
}
