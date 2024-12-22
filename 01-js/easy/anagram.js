/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove all whitespace and convert to lowercase
  const normalize = (str) => str.replace(/\s+/g, '').toLowerCase();

  // Normalize the strings
  const normalizedStr1 = normalize(str1);
  const normalizedStr2 = normalize(str2);

  // Check if sorted characters of both strings match
  return normalizedStr1.split('').sort().join('') === normalizedStr2.split('').sort().join('');
}

// Example usage
console.log(isAnagram('spar', 'rasp')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('Listen', 'Silent')); // true
console.log(isAnagram('dormitory', 'dirty room')); // true
