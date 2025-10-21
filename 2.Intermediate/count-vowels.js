// Count Vowels

// Problem Description:
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
// The function should be case-insensitive.

// Examples:
// countVowels("hello");           // Returns: 2
// countVowels("JavaScript");      // Returns: 3
// countVowels("aeiou");           // Returns: 5
// countVowels("xyz");             // Returns: 0
// countVowels("HELLO WORLD");     // Returns: 3

// Requirements:
// - The function should accept one string parameter
// - Return the count of vowels (a, e, i, o, u)
// - Should be case-insensitive (count both uppercase and lowercase vowels)
// - Ignore all consonants and special characters

// Hints:
// - Convert the string to lowercase first
// - Loop through each character and check if it's a vowel
// - You can use an array of vowels to check against
// - Consider using includes() method
// - Or use filter() with split()

function countVowels(str) {
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();
    
    // Define a set of vowels for easy lookup
    const vowels = 'aeiou';
    
    // Initialize a count variable
    let count = 0;
    
    // Loop through each character in the string
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Test Cases
console.log(countVowels("hello"));           // Expected: 2
console.log(countVowels("JavaScript"));      // Expected: 3
console.log(countVowels("aeiou"));           // Expected: 5
console.log(countVowels("xyz"));             // Expected: 0
console.log(countVowels("HELLO WORLD"));     // Expected: 3