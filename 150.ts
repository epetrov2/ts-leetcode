function evalRPN(tokens: string[]): number {
    let nums = Array<number>();
    for (const iterator of tokens) {
        console.log(iterator + ': ' + nums);
        switch (iterator) {
            case '+': {
                nums.push(nums.pop()! + nums.pop()!);
                break;
            }
            case '-': {
                const d1 = nums.pop()!;
                const d2 = nums.pop()!;
                nums.push(d2 - d1);
                break;
            }
            case '*': {
                nums.push(nums.pop()! * nums.pop()!);
                break;
            }
            case '/': {
                const d1 = nums.pop()!;
                const d2 = nums.pop()!;
                nums.push(Math.sign(d1 * d2) * Math.floor(Math.abs(d2) / Math.abs(d1)));
                break;
            }
            default: {
                nums.push(parseInt(iterator));
            }
        }
    }
    return nums.pop()!;
};

console.log(evalRPN(["4","3","-"]));

//console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));


