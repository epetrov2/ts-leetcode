function trap(height: number[]): number {
    let water = 0;
    let stack = Array<[number, number]>();
    let curr: [number, number] = [0, height[0]];
    
    //stack.push();

    for (let i = 1; i < height.length; i++) {
        if (curr[1] > height[i]) {
            stack.push(curr);
            curr = [i, height[i]];
        } else if (curr[1] < height[i]) {
            let prev = stack.pop();

            while (prev !== undefined) {
                water += (Math.min(prev[1], height[i]) - curr[1]) * (i - prev[0] - 1);
                console.log(`prev:${prev}, height[i]:${height[i]} curr[1]:${curr[1]} i:${i}`);
                
                if (prev[1] < height[i]) {
                    curr = prev;
                    prev = stack.pop();
                } else if (prev[1] > height[i]) { 
                    curr = [i, height[i]];
                    stack.push(prev);
                    break;
                } else {
                    curr = [i, height[i]];
                    break;
                }
                
                // prev = stack.pop();
            }
            if (prev === undefined) {
                curr = [i, height[i]];
            }
        } else {
            curr = [i, height[i]];
        }
    }

    return water;
};

//console.log(trap([4, 3, 2, 0, 1, 3, 5, 6]));
//console.log(trap([40, 20, 0, 30, 20, 50]));
//console.log(trap([4, 2, 0, 3, 2, 5]));

console.log(trap([5,5,1,7,1,1,5,2,7,6]));

//console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
