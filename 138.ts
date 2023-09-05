
 class RNode {
     val: number
     next: RNode | null
     random: RNode | null
    constructor(val?: number, next?: RNode, random?: RNode) {
        this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
         this.random = (random===undefined ? null : random)
     }
 }


function copyRandomList(head: RNode | null): RNode | null {
    let a = Array<RNode>()

    let cur = head
    for (let i = 0; cur !== null; i++) {
        a.push(new RNode(cur.val))
        cur.val = i
        cur = cur.next
    }

    for (let i = 0; i < a.length - 1; i++) {
        a[i].next = a[i+1]
    }

    cur = head
    for (let i = 0; cur !== null; i++) {
        if (cur.random) a[i].random = a[cur.random!.val]
        cur = cur.next
    }

    if (a.length) return a[0]
    else return null
};

let r1 = new RNode(1, undefined)
let r10 = new RNode(10, r1)
let r11 = new RNode(11, r10, r1)
let r13 = new RNode(13, r11)
let r7 = new RNode(7, r13, undefined)
r1.random = r7
r13.random = r7
r10.random = r11

console.log(copyRandomList(r1));
