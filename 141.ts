  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


function hasCycle(head: ListNode | null): boolean {
    let x2 = head
    while (head !== null && head.next !== null && x2?.next !== null && x2?.next?.next !== null) {
        console.log(`h: ${head.val}, x2:${x2?.val}`);
        
        if (head === x2!.next!.next) return true

        head = head.next
        x2 = x2!.next!.next
    }
    return false
};

let l4 = new ListNode(-4)
let l0 = new ListNode(0, l4)
let l2 = new ListNode(2, l0)
let l3 = new ListNode(3, l2)
l4.next = l2

console.log(hasCycle(l3))