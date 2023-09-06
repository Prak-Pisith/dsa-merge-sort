/* 
  Merge Sort Algorithm
  TODO:
    - Divide array into 2 subarrays
    - Recursively divide each subarray into 2 subarrays till array has only 1 element
    - Compare between left and right arrays, push smaller element to left
    - Merge those divided arrays together
*/


// Recursive Method
const mergeSort = (numbers: number[]): number[] => {

  const length = numbers.length;
  if (length <= 1) return numbers; // Array is already sorted, or has 1 element

  const middle = Math.floor(length / 2);
  const leftArray = numbers.slice(0, middle);
  const rightArray = numbers.slice(middle);

  console.log(middle);
  console.log(leftArray);
  console.log(rightArray);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// Helper Methods
const merge = (leftArray: number[], rightArray: number[]): number[] => {
  const result: number[] = [];
  let leftIndex: number = 0;
  let rightIndex: number = 0;

  console.log(`left array: ${leftArray} right array: ${rightArray}`);

  while(leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));
}


const numbers: number[] = [8,2,5,3,4,7,6,1];
console.log(`Before: ${numbers}`);
console.log(`After: ${mergeSort(numbers)}`);
