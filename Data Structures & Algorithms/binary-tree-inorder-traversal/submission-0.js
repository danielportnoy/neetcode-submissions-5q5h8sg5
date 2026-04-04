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
     * @return {number[]}
     */
    inorderTraversal(root) {
        if (root === null) return []
        let res = []
        if (root.left != null) res.push(this.inorderTraversal(root.left))
        res.push(root.val)
        if (root.right != null) res.push(this.inorderTraversal(root.right))
        return res
    }
}
