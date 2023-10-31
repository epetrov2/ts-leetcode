function findArray(pref: number[]): number[] {
    let result = Array<number>(pref.length)
    
    for (let i = 1; i < pref.length; i++) {
        //const val = pref[i];
        result[i] = pref[i - 1] ^ pref[i];
    }
    return result
};

console.log(findArray([5,2,0,3,1]));
//console.log(5 ^ 7);