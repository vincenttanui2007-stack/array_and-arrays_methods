// 1. Write a function that takes an array of numbers and returns the sum of all the numbers.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 2. Write a function that takes an array and returns the largest number in the array.
function largestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

// 3. Write a function that counts how many even numbers are in an array.
function countEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) count++;
  }
  return count;
}

// 4. Write a function that returns the index of the first negative number in an array, or -1 if there are none.
function firstNegativeIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) return i;
  }
  return -1;
}

// 5. Write a function that takes an array and returns a new array with only the positive numbers.
function positiveNumbers(arr) {
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result[count] = arr[i];
      count++;
    }
  }
  return result;
}

// 6. Write a function that checks if a given number exists in an array.
function existsInArray(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return true;
  }
  return false;
}

// 7. Write a function that takes an array and returns the smallest number in the array.
function smallestNumber(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];
  }
  return smallest;
}

// 8. Write a function that counts how many times a specific value appears in an array.
function countOccurrences(arr, val) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) count++;
  }
  return count;
}

// 9. Write a function that returns true if all numbers in an array are greater than 10, otherwise false.
function allGreaterThan10(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 10) return false;
  }
  return true;
}

// 10. Write a function that finds the sum of all odd numbers in an array.
function sumOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) sum += arr[i];
  }
  return sum;
}

// 11. Write a function that takes an array and returns the average of the numbers.
function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// 12. Write a function that finds the difference between the largest and smallest numbers in an array.
function largestMinusSmallest(arr) {
  let largest = arr[0];
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
    if (arr[i] < smallest) smallest = arr[i];
  }
  return largest - smallest;
}

// 13. Write a function that takes an array and returns a new array with all numbers multiplied by 2.
function multiplyByTwo(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] * 2;
  }
  return result;
}

// 14. Write a function that returns the last element of an array.
function lastElement(arr) {
  return arr[arr.length - 1];
}

// 15. Write a function that takes an array and a number, and returns true if the number is found at an even index.
function foundAtEvenIndex(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] === num) return true;
  }
  return false;
}

// 16. Write a function that counts how many numbers in an array are greater than a given value.
function countGreaterThan(arr, val) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > val) count++;
  }
  return count;
}

// 17. Write a function that returns the sum of numbers at even indexes in an array.
function sumAtEvenIndexes(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) sum += arr[i];
  }
  return sum;
}

// 18. Write a function that takes an array and returns true if the array is sorted in ascending order.
function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

// 19. Write a function that takes an array and returns the second largest number.
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
}

// 20. Write a function that takes an array and returns the number of elements that are both positive and even.
function countPositiveEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) count++;
  }
  return count;
}

// 21. Write a function that counts how many times a specific character appears in a string.
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}

// 22. Write a function that returns the number of vowels in a string.
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}

// 23. Write a function that reverses a string and returns the reversed version.
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 24. Write a function that checks if a string is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

// 25. Write a function that counts the number of words in a string, assuming words are separated by a single space.
function countWords(str) {
  if (str.length === 0) return 0;
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") count++;
  }
  return count;
}

// 26. Create an array with 20 numbers and filter out the prime numbers from the array and print them in the console.
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let primes = [];
let primeCount = 0;
for (let i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    primes[primeCount] = numbers[i];
    primeCount++;
  }
}
console.log("Prime numbers:", primes);

/* 
Here are 20 algorithm questions designed to test your knowledge of loops, conditions, functions, array length and indexes, dot notation, and operators—<b> _without using array or string methods_</b> (like push, pop, split, join, etc.):

1. Write a function that takes an array of numbers and returns the sum of all the numbers.
2. Write a function that takes an array and returns the largest number in the array.
3. Write a function that counts how many even numbers are in an array.
4. Write a function that returns the index of the first negative number in an array, or -1 if there are none.
5. Write a function that takes an array and returns a new array with only the positive numbers.
6. Write a function that checks if a given number exists in an array.
7. Write a function that takes an array and returns the smallest number in the array.
8. Write a function that counts how many times a specific value appears in an array.
9. Write a function that returns true if all numbers in an array are greater than 10, otherwise false.
10. Write a function that finds the sum of all odd numbers in an array.
11. Write a function that takes an array and returns the average of the numbers.
12. Write a function that finds the difference between the largest and smallest numbers in an array.
13. Write a function that takes an array and returns a new array with all numbers multiplied by 2.
14. Write a function that returns the last element of an array.
15. Write a function that takes an array and a number, and returns true if the number is found at an even index.
16. Write a function that counts how many numbers in an array are greater than a given value.
17. Write a function that returns the sum of numbers at even indexes in an array.
18. Write a function that takes an array and returns true if the array is sorted in ascending order.
19. Write a function that takes an array and returns the second largest number.
20. Write a function that takes an array and returns the number of elements that are both positive and even.
21. Write a function that counts how many times a specific character appears in a string.
22. Write a function that returns the number of vowels in a string.
23. Write a function that reverses a string and returns the reversed version.
24. Write a function that checks if a string is a palindrome (reads the same forwards and backwards).
25. Write a function that counts the number of words in a string, assuming words are separated by a single space.
26. Create an array with 20 numbers and filter out the prime numbers from the array and print the prime numbers in the console
These questions will help you practice using loops, conditions, functions, array length and indexes, dot notation, and operators—without relying on built-in array or string methods.

*/
