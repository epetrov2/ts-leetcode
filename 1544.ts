function makeGood(s: string): string {
    let a = Array<number>();
    const diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i);
        if (a.length && Math.abs(c - a[a.length - 1]) === diff) a.pop()
        else a.push(c);

    }
    
    return String.fromCharCode(...a);
};

console.log(makeGood("aAleEeeoDdetcvabBAcCVRaA"));//leeoDdetcR
console.log(makeGood("leEeetcvabBAcCVoRDde"));

//Runtime 48 ms Beats 100.00% of users with TypeScript
