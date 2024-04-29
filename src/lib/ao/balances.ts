import { ArweaveId, Score } from "../types";
import { connect } from "@permaweb/aoconnect"

export type BalancesRaw = Record<ArweaveId, Score>

const ao = connect()

export async function fetchBalances(processId: string) {
  const result = await ao.dryrun({
    process: processId,
    tags: [{ name: "Action", value: "Balances" }],
    data: "{}",
    anchor: '1234',  
  });
  return JSON.parse(result.Messages[0].Data) as BalancesRaw;
}
