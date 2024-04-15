

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


function sumNumbers(root: TreeNode | null): number {
    let sum = 0;
    let stack = Array<number>();


    function sumTree(node: TreeNode) {

        if (!node.left && !node.right) {
            let val = 0;
            for (let i = 0; i < stack.length; i++) {
                val += stack[i];
                val *= 10;
            }
            sum += val + node.val;
        } else {
            stack.push(node.val);
            if (!!node.left) sumTree(node.left)
            if (!!node.right) sumTree(node.right);
            stack.pop();
        }
    }

    sumTree(root!);
    return sum;
};


let node_5 = new TreeNode(5);
let node_1 = new TreeNode(1);
let node_9 = new TreeNode(9, node_5, node_1);
let node_0 = new TreeNode(0);
let node_4 = new TreeNode(4, node_9, node_0);

console.log(sumNumbers(node_4));
