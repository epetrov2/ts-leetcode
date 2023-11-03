function buildArray(target: number[], n: number): string[] {
    let result: string[] = []
    let value = 1;
    for (let i = 0; i < target.length; i++) {
        while (target[i] !== value) {
            result.push('Push');
            result.push('Pop');
            value++;
        }
        result.push('Push');
        value++;
    }   
    return result; 
};

console.log(buildArray([1,3], 3));
