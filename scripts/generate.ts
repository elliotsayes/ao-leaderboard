import { generateBalances } from "./generateBalances";

async function generate() {
  await generateBalances(100, "fixtures/balances/gen_100.json")
  await generateBalances(100_000, "fixtures/balances/gen_100K.json")
  await generateBalances(1_000_000, "fixtures/balances/gen_1M.json")
}

generate();
