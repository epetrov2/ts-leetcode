function longestPalindrome(s: string): string {
    const n = s.length;
    let maxStart = 0;
    let maxLength = 1;

    function check(l: number, r: number, sum: number): void {
        
        while (l >= 0 && r < n) {
            if (s[l] !== s[r]) break;
            sum = sum + 2;
            l--;
            r++;
        }
        if (sum > maxLength) {
            maxLength = sum;
            maxStart = l;
        }
    }

    let right = Math.floor(n / 2)
    let left = right - 1;
    //console.log(left + ' ' + right  + ' ' + n);
    while (right < n) {
        if ((left >= 0) && (((left + 1) * 2) > maxLength)) { 
            check(left - 1, left + 1, 1);
            check(left, left + 1, 0);
        }

        
        if (((n - right - 1) * 2 + 1) > maxLength) { 
            check(right - 1, right + 1, 1);
            check(right, right + 1, 0);
        }
        left--
        right++
    }
    return s.substring(maxStart, maxStart + maxLength)
};

console.log(longestPalindrome('acababca'));

//console.log(longestPalindrome('aa'));