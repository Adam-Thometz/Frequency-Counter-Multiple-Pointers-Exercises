function makeFrequencyCounterDigits(num) {
  const counter = new Map()
  for (let i = 0; i < num.toString().length; i++) {
    const currDigit = Math.floor(num % (10 ** (i+1)) / (10**i))
    const digitCount = counter.get(currDigit) || 0
    counter.set(currDigit, digitCount+1)
  }
  return counter
}

function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) return false
  const num1Counter = makeFrequencyCounterDigits(num1)
  const num2Counter = makeFrequencyCounterDigits(num2)
  for (let digit of num1Counter.keys()) {
    if (num1Counter.get(digit) !== num2Counter.get(digit)) return false
  }
  return true
}

// Apporoach: Frequency Counter

// Inputs: two different numbers
// Output: boolean

// Step 1: Determine if the numbers have same number of digits. If not, return false
// Step 2: Create a digit frequency counter for each number (see instructions below)
// Step 3: Loop through the keys of one of the counters by using the mod operator
  // Step 3a: If the frequencies of the digits do NOT match, return false
// Step 4: Return true if we made it here

// Frequency counter instructions:

// Step 1: Initialize map
// Step 2: Loop through the digits using the following formula: Math.floor(num % (10 ** (i+1)) / (10**i)). Call this currDigit.
  // Step 2a: Either add digit to map or increment counter for digit in map
// Step 3: Return map