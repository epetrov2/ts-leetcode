
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    let cur = head
    let res = new Array<ListNode | null>(k).fill(null)
    let n = 0
    for (; !!cur; n++) cur = cur.next
    let m = Math.floor(n / k)
    let extra = n - (m * k)
    
    console.log(`n: ${n}, m: ${m}, e: ${extra}`);
    
    cur = head
    let prev = head
    res[0] = cur
    for (let i = 1; i < k && !!cur; i++) {
        for (let j = 0; j < m && !!cur; j++) {
            prev = cur
            cur = cur!.next
        }
        if (extra) {
            prev = cur
            cur = cur!.next
            extra--
        }
        prev!.next = null
        res[i] = cur
    }

    return res 
};

let l10 = new ListNode(10, null)
let l9 = new ListNode(9, l10)
let l8 = new ListNode(8, l9)
let l7 = new ListNode(7, l8)
let l6 = new ListNode(6, l7)
let l5 = new ListNode(5, l6)
let l4 = new ListNode(4, l5)
let l3 = new ListNode(3, l4)
let l2 = new ListNode(2, l3)
let l1 = new ListNode(1, l2)

console.log(splitListToParts(l1, 3));
