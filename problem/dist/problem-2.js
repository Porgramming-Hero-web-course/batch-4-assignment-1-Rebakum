"use strict";
//problem-2
function removeDuplicates(numbers) {
    const uniqueNumbers = [];
    for (let num of numbers) {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
        }
    }
    return uniqueNumbers;
}
// Sample Input:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// Sample Output:
// [1, 2, 3, 4, 5]
