import { twoSum, twoSumOptimal } from './twoSum'

describe('twoSum', () => {
  it.each`
    nums              | target | expectedResult
    ${[10, 1, 4, 20]} | ${5}   | ${[1, 2]}
    ${[10, 1, 4, 20]} | ${11}  | ${[0, 1]}
    ${[10, 1, 4, 20]} | ${30}  | ${[0, 3]}
    ${[0, 11, 4, 20]} | ${11}  | ${[0, 1]}
  `(
    'returns $expectedResult index for target $target and nums $nums',
    ({ nums, target, expectedResult }) => {
      const result = twoSum(nums, target)

      expect(result).toEqual(expectedResult)
    }
  )
})

describe('twoSumOptimal', () => {
  it.each`
    nums              | target | expectedResult
    ${[10, 1, 4, 20]} | ${5}   | ${[1, 2]}
    ${[10, 1, 4, 20]} | ${11}  | ${[0, 1]}
    ${[10, 1, 4, 20]} | ${30}  | ${[0, 3]}
    ${[0, 11, 4, 20]} | ${11}  | ${[0, 1]}
  `(
    'returns $expectedResult index for target $target and nums $nums',
    ({ nums, target, expectedResult }) => {
      const result = twoSumOptimal(nums, target)

      expect(result).toEqual(expectedResult)
    }
  )
})
