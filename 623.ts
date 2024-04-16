

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

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if (depth === 1) return new TreeNode(val, root);
    function addRow(node : TreeNode, curDepth: number): void {
        if (depth === curDepth) {
            let left = new TreeNode(val, node.left);
            let right = new TreeNode(val, null, node.right);
            node.left = left;
            node.right = right;
        } else {
            if (!!node.left) addRow(node.left, curDepth + 1);
            if (!!node.right) addRow(node.right, curDepth + 1);
        }
    }

    addRow(root!, 2);
    return root;
};