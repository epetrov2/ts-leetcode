function leastInterval(tasks: string[], n: number): number {
    const A = 'A'.charCodeAt(0);

    let tasksCount = new Map<string, number>();
    for (const task of tasks) {
        const tc = tasksCount.get(task);
        if (tc === undefined) tasksCount.set(task, 1);
        else tasksCount.set(task, tc + 1);
    }
    console.log(tasksCount);

    let taskArray = Array.from(tasksCount);
    taskArray.sort((a, b) => b[1] - a[1]);
    let seqLength = 0;

    while (taskArray.length > 0 && taskArray[0][1] > 1) {
        const maxLayer = taskArray[0][1];
        let layer = 0;
        let needLayer = maxLayer;
        console.log(`ml:${maxLayer}`);
        while (layer < n) {
            while (needLayer > 0) {
                
                console.log(`l:${layer} nl:${needLayer} t0:${taskArray[0]}`);
                if (taskArray.length === 0) {
                    needLayer = 0;
                    layer = n;
                    break;
                }
                const val = Math.min(needLayer, taskArray[0][1]);

                needLayer -= val;
                taskArray[0][1] -= val;

                if (taskArray[0][1] === 0) {
                    taskArray.sort((a, b) => b[1] - a[1]);
                    taskArray.length--;
                }
            
                if (needLayer === 0) {
                    layer++;
                    if (layer === n) break;
                    needLayer = maxLayer;
                }

            }
            seqLength += n * maxLayer;
        }

    }
    seqLength += taskArray.length;

    return seqLength;
};

//console.assert(leastInterval(["A", "A", "A", "B", "B", "B"], 2) === 8);
console.assert(leastInterval(["D", "A", "C", "A", "D", "C", "A", "A", "A", "B", "C", "B", "B", "B", "C"], 3) === 16);
//console.assert(leastInterval(["D", "A", "A", "C", "A", "D", "A", "C", "A", "A", "A", "B", "C", "B", "B", "B", "C"], 3) === 19);
//console.assert(leastInterval(["A", "C", "A", "B", "D", "B"], 1) === 6);
//console.assert(leastInterval(["A", "A", "A", "B", "B", "B"], 3) === 10);
