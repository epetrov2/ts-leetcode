namespace e92 {

    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }
    }

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let i = 1
    let cur = head
    let prev = cur
    let before: ListNode | null = null
    for (; i < left; i++) {
        prev = cur
        cur = cur!.next
    }

    if (i > 1) before = prev
    console.log(`before: ${before?.val}`)
    let savednext = cur
    let first = cur
    for (; i <= right; i++) {
        savednext = cur!.next
        
        cur!.next = prev
        
        console.log(`i: ${i}, c: ${cur?.val}, c.n: ${cur!.next?.val}`);
        
        prev = cur
        cur = savednext
    }
    if (left === 1) head = prev
    if (before !== null) before!.next = prev
    
    first!.next = savednext

    return head
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

let ans = reverseBetween(l1, 1, 10)
while (!!ans) {
    console.log(ans.val);
    ans = ans.next
}

}