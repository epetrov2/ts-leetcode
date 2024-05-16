class TreeNod {
    val: number
    left: TreeNod | null
    right: TreeNod | null
    constructor(val?: number, left?: TreeNod | null, right?: TreeNod | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function evaluateTree(root: TreeNode | null): boolean {
    switch (root!.val) {
        case 0:
            return false;
        case 1:
            return true;
        case 2:
            return evaluateTree(root!.left) || evaluateTree(root!.right);
        case 3:
            return evaluateTree(root!.left) && evaluateTree(root!.right);
    }
    return false;
};