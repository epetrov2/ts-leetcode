function sortArrayByParity(nums: number[]): number[] {
    
    return nums.filter((num) => num % 2 === 0).concat(nums.filter((num) => num % 2 !== 0))

};

console.log(sortArrayByParity([]));

function isEven(n) {
    return n % 2 == 0;
 }
 
 function isOdd(n) {
    return Math.abs(n % 2) == 1;
 }