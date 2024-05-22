import { ArweaveId, Score } from "../types";
import { connect } from "@permaweb/aoconnect"

type Tag = {
  name: string;
  value: string;
};

export type TokenInfoRaw = {
  Name: string;
  Ticker: string;
  Logo: string;
  Denomination: string;
};

export type BalancesRaw = Record<ArweaveId, Score>

const ao = connect()

export async function fetchInfo(processId: string) {
  const result = await ao.dryrun({
    process: processId,
    tags: [{ name: "Action", value: "Info" }],
    data: "{}",
    anchor: '1234',  
  });
  const tagMap = (result.Messages[0].Tags as Tag[]).map((v) => ({[v.name] : v.value}));
  return Object.assign({}, ...tagMap) as TokenInfoRaw;
}

export async function fetchBalances(processId: string) {
  const result = await ao.dryrun({
    process: processId,
    tags: [{ name: "Action", value: "Balances" }],
    data: "{}",
    anchor: '1234',  
  });
  return JSON.parse(result.Messages[0].Data) as BalancesRaw;
}
