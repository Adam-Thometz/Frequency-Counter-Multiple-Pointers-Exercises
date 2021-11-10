function makeFreqCounterWithDiffs (arr, target) {
  const counterMap = new Map()
  for (let num of arr) {
    counterMap.set(num, (target-num))
  }
  return counterMap
}

function countPairs(arr, target) {
  const freqCounter = makeFreqCounterWithDiffs(arr, target)
  let counter = 0
  for (let num of arr) {
    if (freqCounter.get(target-num) === num) counter++
  }
  return Math.floor(counter / 2)
}

// Approach: Frequency Counter

// Inputs: an array and a target
// Output: number of pairs that sum to the target

// Step 1: Make a frequency counter for the numbers in the array (see steps below)
// Step 2: Loop through the array and find its difference by incrementing a counter.
// Step 3: Return the count divided by 2 (bc we were counting both numbers in the pair)

// Frequency counter
// Step 1: Initialize map
// Step 2: Add numbers from the array as keys and the difference of target and the numbner as the value
// Step 3: Return map