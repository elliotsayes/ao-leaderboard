import { file } from "bun";
import { generateBalances } from "./generateBalances";
import { generateLeaderboards } from "./generateLeaderboards";
import { BalancesRaw } from "../src/lib/ao/balances";

async function generate() {
  const balancesContract = await file("fixtures/balances/contract_gAC5hpUPh1v-oPJLnK3Km6-atrYlvI271bI-q0yZOnw.json").json() as BalancesRaw
  await generateLeaderboards(balancesContract, "fixtures/leaderboards/contract_gAC5hpUPh1v-oPJLnK3Km6-atrYlvI271bI-q0yZOnw.json")

  const balances100 = await generateBalances(100, "fixtures/balances/gen_100.json")
  const balances100K = await generateBalances(100_000, "fixtures/balances/gen_100K.json")
  const balances1M = await generateBalances(1_000_000, "fixtures/balances/gen_1M.json")

  await generateLeaderboards(balances100, "fixtures/leaderboards/gen_100.json")
  await generateLeaderboards(balances100K, "fixtures/leaderboards/gen_100K.json")
  await generateLeaderboards(balances1M, "fixtures/leaderboards/gen_1M.json")
}

generate();
