function hasUniqueChars(str) {
    // Create an empty object to store characters we've seen
    const charSet = {};
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // If the character is already in the charSet, it's not unique
      if (charSet[char]) {
        return false;
      }
  
      // Otherwise, mark the character as seen by adding it to charSet
      charSet[char] = true;
    }
  
    // If we've checked all characters and none were repeated, return true
    return true;
  }
  
  // Example usage:
  console.log(hasUniqueChars("abcdefg")); // true
  console.log(hasUniqueChars("hello"));   // false  