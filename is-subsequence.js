function isSubsequence(subStr, longStr) {
  if (subStr.length > longStr.length) return false

  let subStrPointer = 0
  let longStrPointer = 0

  while (longStrPointer < longStr.length && subStrPointer < subStr.length) {
    if (subStr[subStrPointer] === longStr[longStrPointer]) subStrPointer++
    longStrPointer++
  }

  return subStrPointer === subStr.length ? true : false
}

// Approach: multiple pointers

// Inputs: two strings; a substring, and a string that we are looking for the substring
// Output: a boolean

// Step 1: if subStr is longer than longStr, return false because subStr would definitely not be a substring
// Step 2: Assign a beginning pointer for each string