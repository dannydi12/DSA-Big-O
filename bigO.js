/*

1.1) Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. 
You want to find a playmate for your dog, preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed 
as your dog. You stand up and yell out, who here has a golden 
retriever and would like to be a playdate for my golden. 
Someone yells - "I do, be happy to bring him over"

O(1) because this acts like a hash map/object key

1.2) Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. You want to 
find a playmate for your dog who is of the same breed. 
So you want to know if anyone out of the 15 people have 
the same breed as your dog. You start with the first 
person and ask him if he has a golden retriever. 
He says no, then you ask the next person, and the 
next, and the next until you find someone who has a 
golden or there is no one else to ask.

O(n) because the time required directly depends on how 
many people there are in the room.

*/


/**
 * O(n^2) - Polynomial complexity
 * We have two for loops that are nested (n * n amount of operations)
 */
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      const el1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}

/**
 * O(n) - Linear complexity 
 * It directly depends on the amount of elements in the array.
 * If it takes 1 second to execute one iteration and the array has a length of 
 * 300, it will take 300 seconds.
 */
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
      array[i] *= 2;
  }
  return array;
}

/**
 * O(n) - Linear complexity 
 * It directly depends on the amount of elements in the array.
 * If it takes 1 second to execute one iteration and the array has a length of 
 * 300, it will take 300 seconds.
 */
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}

/**
 * O(n^2) - Polynomial complexity
 * We have two for loops that are nested (n * n amount of operations)
 */
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}

/**
 * O(n) - Linear complexity  
 * We have one for loop that executes an instruction
 * exactly as many times as the input.
 */
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i === 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}

/**
 * O(log(n)) - Logarithmic Complexity
 * This is the binary search algorithm implemented on
 * a sorted array. This can be logarithmic because we
 * are dividing the array in half on each execution. Therefore,
 * if we increase our input, it will increase our time complexity, 
 * but not as much as if we were linearly searching through the array.
 */
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}

/**
 * O(1) - Constant complexity
 * This function executes only one instruction no matter
 * how large the inputted array.
 */
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Best Case: O(1) - Constant complexity
 * Worst Case: O(n) - Linear complexity
 * 
 * I gave this two cases because if the first
 * 'if' condition is satisfies, it will always run
 * one instruction no matter the input.
 * 
 * On the other hand, the for loop willl run if the above
 * condition isn't met and the loop would iterate for as long
 * as the length described by 'n'. Making it directly tied to
 * the input at linear time complexity.
 */
function isWhat(n) {
  // if n is less than 2 or not a whole number
  if (n < 2 || n % 1 !== 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i === 0) return false;
  }
  return true;
}


// How to determine time complexity of recursive functions?