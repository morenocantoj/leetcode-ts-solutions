import { isPalindrome } from './isPalindrome'

describe('isPalindrome', () => {
  it.each`
    target    | expectedResult
    ${121}    | ${true}
    ${72127}  | ${true}
    ${122221} | ${true}
    ${-121}   | ${false}
    ${10}     | ${false}
    ${1}      | ${true}
  `(
    'returns $expectedResult index for target $target and nums $nums',
    ({ target, expectedResult }) => {
      const result = isPalindrome(target)

      expect(result).toEqual(expectedResult)
    }
  )
})
