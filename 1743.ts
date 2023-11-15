// function restoreArray(adjacentPairs: number[][]): number[] {
//     const result = adjacentPairs[0];
//     let left = result[0]
//     let right = result[1]

//     while (adjacentPairs.length > 1) {

//         let i = 1;

//         while (i < adjacentPairs.length) {
//             if (left === adjacentPairs[i][0]) {
//                 left = adjacentPairs[i][1];
//                 result.unshift(left);
//                 adjacentPairs.splice(i, 1);

//             } else if (left === adjacentPairs[i][1]) {
//                 left = adjacentPairs[i][0];
//                 result.unshift(left);
//                 adjacentPairs.splice(i, 1);
//             } else if (right === adjacentPairs[i][0]) {
//                 right = adjacentPairs[i][1];
//                 result.push(right);
//                 adjacentPairs.splice(i, 1);
//             } else if (right === adjacentPairs[i][1]) {
//                 right = adjacentPairs[i][0];
//                 result.push(right);
//                 adjacentPairs.splice(i, 1);
//             } else i++;
//         }
//         console.log(`result: ${result.length}, all: ${adjacentPairs.length}`);

//     }

//     return result;
// };

function restoreArray(adjacentPairs: number[][]): number[] {
    let map = new Map<number, number[]>()

    for (const iterator of adjacentPairs) {
        const left = map.get(iterator[0]);
        if (left === undefined) map.set(iterator[0], [iterator[1]]);
        else left.push(iterator[1]);

        const right = map.get(iterator[1]);
        if (right === undefined) map.set(iterator[1], [iterator[0]]);
        else right.push(iterator[0]);
    }

    let prev = 0;
    for (const iterator of map) {
        if (iterator[1].length === 1) {
            prev = iterator[0];
            break;
        }
    }

    let left = map.get(prev)![0];
    let result: number[] = [prev, left];
    const N = map.size;
    let right = 0;

    for (let i = 2; i < N; i++) {
        const value = map.get(left)!;
        if (value[0] !== prev) right = value[0];
        else right = value[1];
        prev = left;
        left = right;
        result.push(right);
    }
    return result;
}

//console.log(restoreArray([[2, 1], [3, 4], [3, 2]]));
//console.log(restoreArray([[4, -2], [1, 4], [-3, 1]]));

