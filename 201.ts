function rangeBitwiseAnd(left: number, right: number): number {
    let l = left.toString(2);
    const r = right.toString(2);
    l = Array(r.length - l.length + 1).join( '0' ) + l;

    console.log(l);
    console.log(r);
    
    let b = Array<string>(r.length).fill('0');
    for (let i = 0; i < r.length; i++) {
        if (l[i] === r[i]) b[i] = l[i];
        else break;
    }
    return parseInt(b.join(''), 2);
};

console.log(rangeBitwiseAnd(5, 7));
console.log(rangeBitwiseAnd(5, 2147483647));

 