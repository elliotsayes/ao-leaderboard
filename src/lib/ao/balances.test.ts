import { describe, it, expect } from "bun:test";
import { fetchBalances } from "./balances";
import { config } from "../../config";

// Fails in bun: https://github.com/oven-sh/bun/issues/8832
describe.skip('fetchBalances', () => {
  it('should fetch from main contract', async () => {
    const balances = await fetchBalances(config.processIdLeaderboardContract);
    expect(balances).toMatchSnapshot();
  })
});
