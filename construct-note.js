function makeFrequencyCounter(str) {
  const freqCount = new Map()
  for (let el of str) {
    let elCount = freqCount.get(el) || 0
    freqCount.set(el, elCount+1)
  }
  return freqCount
}

function constructNote(msg, letters) {
  const letterFreqCounter = makeFrequencyCounter(letters)
  for (let char of msg) {
    let freq = letterFreqCounter.get(char)
    if (!letterFreqCounter.has(char)) return false
    if (freq === 0) return false
    letterFreqCounter.set(char, freq-1)
  }
  return true
}

// Approach: Frequency Counter

// Step 1: Make a frequency counter for letters (letterFreqCounter)
// Step 2: Iterate through each char in the msg string
  // Step 2a. If char does not exist in letterFreqCounter, return false
  // Step 2b. If the amount of letters left is 0, return false 
  // Step 2c. Decrement counter
// Step 3: We made it through the loop! Return true