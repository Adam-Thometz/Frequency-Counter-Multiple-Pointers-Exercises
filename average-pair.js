// add whatever parameters you deem necessary
function averagePair(numArr, target) {
  let left = 0
  let right = numArr.length - 1

  while (left < right) {
    let avg = (numArr[left] + numArr[right]) / 2
    if (avg < target) {
      left++
    } else if (avg > target) {
      right--
    } else {
      return true
    }
  }

  return false
}

// function averagePairRecursive(
//   numArr,
//   target,
//   left = 0,
//   right = numArr.length - 1
// ) {
//   const avg = (numArr[left] + numArr[right]) / 2

//   // base case
//   if (avg === target) return true
//   if (left > right) return false

//   // normal cases
//   if (avg < target) return averagePairRecursive(numArr, target, left = left+1, right)
//   if (avg > target) return averagePairRecursive(numArr, target, left, right = right-1)
// }

// Approach: Multiple Pointers

// Inputs: array of numbers, target average
// Expected output: boolean

// Step 1: Assign pointers to the first and last elements of the array
// WHILE LEFT POINTER AND RIGHT POINTER HAVE NOT CROSSED
  // Step 2: Take average of the two elements.
  // Step 3. If average is lower than target, increase the left pointer
  // Step 4: If average is higher than target, decrease the right pointer
  // Step 5: If average IS the target, return true
// END LOOP
// Step 6: If you made it here, return false bc no combinations worked...