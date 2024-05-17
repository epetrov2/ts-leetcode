

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {

    function traverse(root: TreeNode | null, level: number = 0): TreeNode | null
    {
        if (root === null) return null;
        if (root.left !== null) root.left = traverse(root.left, level + 1);
        if (root.right !== null) root.right = traverse(root.right, level + 1);

        if (root.val === target && root.left === null && root.right === null) return null;

        return root;
    };

    return traverse(root!);
};

console.log(removeLeafNodes(null, 0));
