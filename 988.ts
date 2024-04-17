

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

function smallestFromLeaf(root: TreeNode | null): string {
    let smallest = Array<number>();
    let stack = Array<number>();
    function traverse(node: TreeNode) {
        stack.push(node.val);
        if (!node.left && !node.right) {
            if (smallest.length === 0) {
                smallest = Array.from(stack);
            } else {
                let smaller = true;
                let i = smallest.length - 1;
                let j = stack.length - 1;
                for (; i >= 0 && j >= 0; i--, j--) {
                    if (smallest[i] === stack[j]) continue 
                    else {
                        if (smallest[i] < stack[j]) smaller = false;
                        break;
                    }
                }
                if (i < 0) smaller = false;

                if (smaller) smallest = Array.from(stack);

            }
        } else {
            if (!!node.left) traverse(node.left)
            if (!!node.right) traverse(node.right);
        }

        stack.pop();
    }

    traverse(root!);
    const a = 'a'.charCodeAt(0);
    return String.fromCharCode(...smallest.map((c => c + a)).reverse());
};

let n7 = new TreeNode(7);
let n15 = new TreeNode(15);
let n20 = new TreeNode(20, n15, n7);
let n9 = new TreeNode(9);
let n3 = new TreeNode(3, n9, n20);

console.log(smallestFromLeaf(n3));
