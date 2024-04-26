
import prand from 'pure-rand';
import { base64urlnopad } from "@scure/base"
import type { BalancesRaw } from "../src/lib/ao/balances"

export async function generateBalances(n: number, outputPath: string): Promise<BalancesRaw> {
  const seed = 0;
  const rng = prand.xoroshiro128plus(seed);
  const randNumber = (min: number, max: number) => {
    const out = (rng.unsafeNext() >>> 0) / 0x100000000;
    return min + Math.floor(out * (max - min + 1));
  };

  const balances: BalancesRaw = {}
  for (let i = 0; i < n; i++) {
    const addressSeed = rng.unsafeNext().toString();
    const hasher = new Bun.CryptoHasher("sha256");
    hasher.update(addressSeed);
    const address = base64urlnopad.encode(
      new Uint8Array(hasher.digest().buffer),
    );
  
    const balance = randNumber(1, 999) * 1000;
  
    balances[address] = balance
  }

  const balancesJson = JSON.stringify(balances)
  await Bun.write(outputPath, balancesJson)
  
  return balances
}
