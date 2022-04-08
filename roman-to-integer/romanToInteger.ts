const numberValidSubtractions: Record<number, number> = {
  5: 1,
  10: 1,
  50: 10,
  100: 10,
  500: 100,
  1000: 100,
}

const romanNumbersToInt: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

export function romanToInt(s: string): number {
  if (s.length > 15) {
    throw new Error('Number is too large')
  }

  const romanNumbers = s.toUpperCase().split('')

  let accumulatedNumber = 0
  let accumulatedSector = 0
  romanNumbers.forEach((letter: string, index: number) => {
    let romanNumberParsed = romanNumbersToInt[letter]
    accumulatedSector += romanNumberParsed

    const nextRomanNumber = romanNumbers[index + 1]
    if (nextRomanNumber && romanNumbersToInt[nextRomanNumber] != romanNumberParsed) {
      if (romanNumbersToInt[nextRomanNumber] > romanNumberParsed) {
        ensureNumberToSubtractIsRight(accumulatedSector, romanNumbersToInt[nextRomanNumber])
        romanNumberParsed *= -1
      }

      accumulatedSector = 0
    }

    accumulatedNumber = accumulatedNumber + romanNumberParsed
  })

  return accumulatedNumber
}

function ensureNumberToSubtractIsRight(numberToSubtract: number, nextNumber: number): void {
  if (numberValidSubtractions[nextNumber] !== numberToSubtract) {
    throw new Error('Roman number malformed')
  }
}
