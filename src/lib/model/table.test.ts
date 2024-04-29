import { describe, expect, it } from 'bun:test';
import { balancesRawToFlat } from './table';

describe('balancesRawToFlat', () => {
  it('should convert balancesRaw to LeaderBoardFlat', () => {
    const balancesRaw = {
      'address1': 1,
      'address2': 2,
      'address3': 3,
    };
    const expected = [
      { rank: 1, address: 'address3', score: 3 },
      { rank: 2, address: 'address2', score: 2 },
      { rank: 3, address: 'address1', score: 1 },
    ];
    const actual = balancesRawToFlat(balancesRaw);
    expect(actual).toEqual(expected);
  });
});
