# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        count = 0

        def dfs(root: TreeNode, max_in_path: int) -> None:
            nonlocal count
            if root.val >= max_in_path:
                count += 1

            if root.left:
                dfs(root.left, max(max_in_path, root.val))
            if root.right:
                dfs(root.right, max(max_in_path, root.val))

        dfs(root, root.val)
        return count