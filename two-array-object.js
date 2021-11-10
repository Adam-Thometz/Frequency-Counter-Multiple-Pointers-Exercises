function twoArrayObject(keys, values) {
  const obj = {}
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i] || null
  }
  return obj
}

// Inputs: array of keys, array of values
// Output: an object

// Step 1: Initialize an object (obj)
// Step 2: Loop through the keys (bc we want to ignore extra values) using a regular for loop
  // Step 2a: Determine if the index is out of the bounds of the values to see if we're inserting null. Otherwise insert the value
  // Step 2b: Insert key and value based on the current index of the loop
// Step 3: Return the object