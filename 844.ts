function backspaceCompare(s: string, t: string): boolean {
    let si = s.length - 1;
    let ti = t.length - 1;
    let sc = 0;
    let tc = 0;

    while (si >= 0) {
        if (s[si] === '#') sc++;
        else if (sc > 0) sc--;
        else {
            while (ti >= 0) {
                if (t[ti] === '#') tc++;
                else if (tc > 0) tc--;
                else break;
                ti--;
            }
            if (s[si] !== t[ti]) return false;
            else ti--;
        }
        
        si--;
    }
    while (ti >= 0) {
        if (t[ti] === '#') tc++;
        else if (tc > 0) tc--;
        else return false;
        ti--;
    }

    return (si === -1 && ti === -1);
};


console.log(backspaceCompare("ab#c","ad#c"));
console.log(backspaceCompare("bxj##tw","bxj###tw"))

console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("ab##", "c##d#"));
console.log(backspaceCompare("ab###", "c#d#"));
console.log(backspaceCompare("ab##", "##c#d#"));
console.log(backspaceCompare("#ab##", "c#d#"));