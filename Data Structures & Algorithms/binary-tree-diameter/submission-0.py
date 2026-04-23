# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:

        max_diameter = 0

        def dfs(root: Optional[TreeNode]) -> int:
            nonlocal max_diameter
            if root is None:
                return 0
            if root.left is None and root.right is None:
                return 1
            length_left = dfs(root.left)
            length_right = dfs(root.right)
            diameter = length_left + length_right
            max_diameter = max(max_diameter, diameter)
            return max(length_left, length_right) + 1

        dfs(root)

        return max_diameter