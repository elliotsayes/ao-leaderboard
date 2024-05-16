import { file } from "bun";
import { generateLeaderboards } from "./generateLeaderboards";
import { BalancesRaw } from "../src/lib/ao/balances";

async function generate() {
  const balancesExport = await file("fixtures/balances/airdrop-list.json").json()
  const balancesRecipients = balancesExport["recipients"]
  const recipientAddresses = Object.keys(balancesRecipients)
  const balancesJsonMapList = recipientAddresses.map((address) => ({
    [address]: balancesRecipients[address]["expRewarded"],
  }))
  const balancesJsonMap = Object.assign({}, ...balancesJsonMapList) as unknown as BalancesRaw
  await generateLeaderboards(balancesJsonMap, "public/leaderboard.json")
}

generate();
