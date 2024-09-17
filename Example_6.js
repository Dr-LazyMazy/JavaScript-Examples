/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, 
that the supplied array will not be empty.

*/
// 1st Sol
class SmallestIntegerFinder{
    findSmallestInt(arrayOfNumbers) {

        let smallestNumber;
        
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            const arrNumber = arrayOfNumbers[i];

            if (i === 0) {
                smallestNumber = arrNumber;
            }
            if (arrNumber < smallestNumber) {
                smallestNumber = arrNumber
            }
        }
        return smallestNumber
    }
}


//2nd sol
function findSmallestInt(arr) {
    // Step 1: Assume the first number is the smallest (initialize with the first element)
    let smallestNumber = arr[0]; 
    
    // Step 2: Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      // Step 3: Check if the current number is smaller than our stored smallest number
      if (arr[i] < smallestNumber) {
        // Step 4: If so, update smallestNumber
        smallestNumber = arr[i];
      }
    }
    
    // Step 5: Return the smallest number found
    return smallestNumber;
  }
  

const arr = [34, 15, 88, 2]
const finder = new SmallestIntegerFinder()
console.log(finder.findSmallestInt(arr))