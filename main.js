/*
  Merge Sort Algorithm
*/
// Recursive Method
var mergeSort = function (numbers) {
    var length = numbers.length;
    if (length <= 1)
        return numbers; // Array is already sorted, or has 1 element
    var middle = Math.floor(length / 2);
    var leftArray = numbers.slice(0, middle);
    var rightArray = numbers.slice(middle);
    console.log(middle);
    console.log(leftArray);
    console.log(rightArray);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
};
// Helper Methods
var merge = function (leftArray, rightArray) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    console.log("left array: ".concat(leftArray, " right array: ").concat(rightArray));
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));
};
var numbers = [8, 2, 5, 3, 4, 7, 6, 1];
console.log("Before: ".concat(numbers));
console.log("After: ".concat(mergeSort(numbers)));
