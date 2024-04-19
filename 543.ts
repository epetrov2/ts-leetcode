// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

function diameterOfBinaryTree(root: TreeNode | null): number {
    let max = 0;

    function lengthOfBinaryTree(root: TreeNode | null): number {
        if (!root) return 0;
        let left = !root.left ? 0: lengthOfBinaryTree(root!.left) + 1;
        let right = !root.right ? 0: lengthOfBinaryTree(root!.right) + 1;
        max = Math.max(max, left + right);
        return Math.max(left, right);
    }

    lengthOfBinaryTree(root);
    return max;
};