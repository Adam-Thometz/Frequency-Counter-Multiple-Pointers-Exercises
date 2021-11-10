// add whatever parameters you deem necessary
function checkAllPosOrNeg(arr) {
  if (arr.every(num => (num < 0))) return true
  if (arr.every(num => (num > 0))) return true
  return false
}

function separatePositive(numArr) {
  if (checkAllPosOrNeg(numArr)) return numArr

  let left = 0
  let right = numArr.length - 1
  while (numArr[right] < 0) right--
  
  while (left < right) {
    if (numArr[left] < 0) {
      let temp = numArr[left]
      numArr[left] = numArr[right]
      numArr[right] = temp
      while (numArr[right] < 0) right--
    }
    left++
  }

  return numArr
}

// Approach: multiple pointers
// Input: an array of numbers, unsorted
// Output: the same array but with negative numbers on the right and positive numbers on the left
// Target runtime: O(n)

// Step 1: Check to see if all numbers are either all positive or all negative. If either is the case, return the array
// Step 2: Assign pointers to first and last elements of array
// Step 3: Decrement the right pointer until it points to a positive number
// WHILE LEFT IS SMALLER THAN RIGHT:
  // Step 4: If the value of the left pointer is negative, swap the left and right pointers
  // Step 5: If the right pointer is pointing to a negative number, decrement the right pointer until it points to a positive number
  // END LOOP
// Step 6: Return array