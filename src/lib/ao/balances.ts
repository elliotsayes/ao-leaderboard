import { connect } from "@permaweb/aoconnect"

export type ArweaveId = string

export type BalancesRaw = Record<ArweaveId, number>

const ao = connect()

export async function fetchBalances(processId: string) {
  const result = await ao.dryrun({
    process: processId,
    tags: [{ name: "Action", value: "Balances" }],
    data: "{}",
    anchor: '1234',  
  });
  console.log(result);
  return JSON.parse(result.Messages[0].Data) as BalancesRaw;
}
