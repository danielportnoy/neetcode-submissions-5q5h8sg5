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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (root === null) return null;

        if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if (root.left !== null && root.right !== null) {
                let closestMin = this.findMin(root.right);
                root.right = this.deleteNode(root.right, closestMin.val);
                root.val = closestMin.val;
            } else {
                return root.left !== null ? root.left : root.right;
            }
        }
        return root;
    }

    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}