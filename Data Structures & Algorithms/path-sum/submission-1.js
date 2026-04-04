/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        if (root === null) return false;

        let sumSoFar = targetSum - root.val;

        if (sumSoFar === 0 && root.left === null && root.right === null)
            return true;

        let isLeftReachTarget =
            root.left != null ? this.hasPathSum(root.left, sumSoFar) : false;
        let isRightReachTarget =
            root.right != null ? this.hasPathSum(root.right, sumSoFar) : false;

        return isLeftReachTarget || isRightReachTarget;
    }
}
