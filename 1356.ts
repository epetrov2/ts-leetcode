function sortByBits(arr: number[]): number[] {
    let forSort = Array<[number,number]>()
    for (let i = 0; i < arr.length; i++) {
        const a = (arr[i].toString(2).match('/1/g')||[]).length;
        console.log(`${arr[i]} ${a}`);
        
        //forSort.push([arr[i], a])


    }
    return []  
};

console.log(sortByBits([0,1,2,3,4,5,6,7,8]));
