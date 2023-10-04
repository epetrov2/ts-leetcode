class MyHashMap {
    private table: number[][] = []
    
    constructor() {}

    put(key: number, value: number): void {
        let l  = Math.floor(key / 1000);
        let r = key % 1000;
        if (this.table[l] === undefined) this.table[l] = []
        this.table[l][r] = value
    }

    get(key: number): number {
        let l  = Math.floor(key / 1000);
        let r = key % 1000;
        if (this.table[l] === undefined) return -1
        if (this.table[l][r] === undefined) return -1
        return this.table[l][r]
    }

    remove(key: number): void {
        this.put(key, -1)
    }
}






/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */