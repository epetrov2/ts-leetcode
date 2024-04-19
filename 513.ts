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

function findBottomLeftValue(root: TreeNode | null): number {
    let maxDepth = -1;
    let value = 0;

    function goDeeper(root: TreeNode, depth: number) {
        if (depth > maxDepth) {
            maxDepth = depth;
            value = root.val;
        }
        if (root.left) goDeeper(root.left, depth + 1);
        if (root.right) goDeeper(root.right, depth + 1);
    }

    goDeeper(root!, 0)
    return value;
};