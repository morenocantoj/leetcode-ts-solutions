export function isPalindrome(target: number): boolean {
  if (target < 0) return false

  const targetArray = []
  let targetCopy = target
  while (targetCopy !== 0) {
    targetArray.push(targetCopy % 10)
    targetCopy = Math.floor(targetCopy / 10)
  }

  const arrayLength = targetArray.length
  for (let i = 0; i < arrayLength / 2; i++) {
    if (targetArray[i] !== targetArray[arrayLength - 1 - i]) {
      return false
    }
  }

  return true
}
