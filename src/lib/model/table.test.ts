import { describe, expect, it } from 'bun:test';
import { balancesRawToFlat } from './table';

describe('balancesRawToFlat', () => {
  it('should convert balancesRaw to LeaderBoardFlat', () => {
    const balancesRaw = {
      'address1': 11,
      'address2': 22,
      'address3': 33,
    };
    const expected = [
      { rank: 1, address: 'address3', score: 3.3 },
      { rank: 2, address: 'address2', score: 2.2 },
      { rank: 3, address: 'address1', score: 1.1 },
    ];
    const actual = balancesRawToFlat(balancesRaw, 1);
    expect(actual).toEqual(expected);
  });
});
