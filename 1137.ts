function tribonacci(n: number): number {
    switch (n) {
        case 0:
            return 0;
        case 1:
        case 2:
            return 1;
        default:
        let first = 0;
        let second = 1;
        let third = 1;
        let sum = 0;
        for (let i = 3; i <= n; i++) {
           sum = first + second + third;
           first = second;
           second = third;
           third = sum; 
        }
        return sum;
    }
};

console.log(tribonacci(0));
console.log(tribonacci(1));
console.log(tribonacci(2));
console.log(tribonacci(3));
console.log(tribonacci(4));
console.log(tribonacci(25));
