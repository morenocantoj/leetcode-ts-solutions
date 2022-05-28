export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

export function twoSumOptimal(nums: number[], target: number): number[] {
  let valuesToIndexes: Record<number, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    const targetMinusValue = target - value
    if (valuesToIndexes[targetMinusValue] !== undefined) {
      return [valuesToIndexes[targetMinusValue], i]
    }

    valuesToIndexes[value] = i
  }
}
