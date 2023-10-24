
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}



function largestValues(root: TreeNode | null): number[] {
    if (!root) return [];
    let queue = Array<[TreeNode, number]>();
    queue.push([root, 0]);
    let largest = Array<number>();
  
    let curr: [TreeNode | null, number] = [null, 0]
  
    while (queue.length !== 0) {
      curr = queue.pop()!;
      while (curr[0] !== null) {
  
        if (largest[curr[1]] === undefined) largest[curr[1]] = curr[0]!.val
        else largest[curr[1]] = Math.max(curr[0]!.val, largest[curr[1]])
  
        if (curr[0]!.left !== null || curr[0]!.right !== null) queue.push([curr[0]!.right!, curr[1] + 1])
        if (curr[0]!.left !== null) curr = [curr[0]!.left!, curr[1] + 1]
        else curr = [curr[0]!.right!, curr[1] + 1]
      }
    }
  
    return largest;
  };

let l3 = new TreeNode(3, null, null)
let l2 = new TreeNode(2, null, null)
let l1 = new TreeNode(1, l2, l3)

largestValues(l1)  