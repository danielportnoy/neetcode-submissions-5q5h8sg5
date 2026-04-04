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
   * @return {boolean}
   */
  isBalanced(root) {
    if (root === null) return true;
    return (
      Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 &&
      this.isBalanced(root.left) &&
      this.isBalanced(root.right)
    );
  }
}

function getHeight(root) {
  if (root === null) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}