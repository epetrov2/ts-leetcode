function isIsomorphic(s: string, t: string): boolean {
    for (let i = 0; i < s.length; i++) {
        let prevPos = s.indexOf(s.charAt(i))
        if ((prevPos < i) && (t.charAt(i) !== t.charAt(prevPos))) return false
        prevPos = t.indexOf(t.charAt(i))
        if ((prevPos < i) && (s.charAt(i) !== s.charAt(prevPos))) return false
    }
    return true
}