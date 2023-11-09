function countHomogenous(s: string): number {
    const MOD: number = 1e9 + 7;
    let count = 0;
    let prev = s[0];
    let local = 1;
    let map = new Map<number, number>()

    for (let i = 1; i <= s.length; i++) {
        if (s[i] === prev) local++;
        else {
            prev = s[i];

            const v = map.get(local);
            if (v === undefined) {
                map.set(local, 1);
            }
            else map.set(local, v + 1);

            local = 1;
        }

    }
    
    let sum = 0;
    for (let i = 1; map.size > 0; i++) {
        sum += i;
        const v = map.get(i);
        if (v !== undefined) {
            count = (count + sum * v) % MOD;
            map.delete(i);
        }
    }
    
    return count;
};

console.log(countHomogenous('abbcccaa'));
