import { romanToInt } from './romanToInteger'

describe(romanToInt, () => {
  it.each`
    romanNumber   | numberRepresentation
    ${'I'}        | ${1}
    ${'V'}        | ${5}
    ${'X'}        | ${10}
    ${'L'}        | ${50}
    ${'C'}        | ${100}
    ${'D'}        | ${500}
    ${'M'}        | ${1000}
    ${'III'}      | ${3}
    ${'IV'}       | ${4}
    ${'VI'}       | ${6}
    ${'IX'}       | ${9}
    ${'IX'}       | ${9}
    ${'MCMXCIV'}  | ${1994}
    ${'MCMXCVII'} | ${1997}
    ${'XLIX'}     | ${49}
  `(
    'should parse $romanNumber to $numberRepresentation',
    ({ romanNumber, numberRepresentation }) => {
      const result = romanToInt(romanNumber)

      expect(result).toBe(numberRepresentation)
    }
  )

  it.each`
    romanNumber
    ${'IIV'}
    ${'IL'}
  `('should throw an error when parsing $romanNumber', ({ romanNumber, numberRepresentation }) => {
    expect(() => romanToInt(romanNumber)).toThrowError()
  })
})
