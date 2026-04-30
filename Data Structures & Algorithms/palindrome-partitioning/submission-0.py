class Solution:
    def partition(self, s: str) -> List[List[str]]:
        partitions = []
        res = []

        def backtrack(i: int) -> None:
            if i >= len(s):
                res.append(partitions.copy())
                return
            for j in range(i, len(s)):
                if self.isPalindrome(s, i, j):
                    partitions.append(s[i : j + 1])
                    backtrack(j + 1)
                    partitions.pop()
                j += 1

        backtrack(0)
        return res

    def isPalindrome(self, s: str, i: int, j: int) -> bool:
        while i < j:
            if s[i] != s[j]:
                return False
            i, j = i + 1, j - 1
        return True
