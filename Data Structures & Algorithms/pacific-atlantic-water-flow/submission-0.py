from typing import List


class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        pacific = set()
        atlantic = set()

        rows = len(heights)
        cols = len(heights[0])

        for r in range(rows):
            pacific.add((r, 0))
            atlantic.add((r, cols - 1))
        for c in range(cols):
            pacific.add((0, c))
            atlantic.add((rows - 1, c))

        res = []

        visitedPacific = set()
        visitedAtlantic = set()

        def dfs(r: int, c: int, visited: set, prevHeight: int) -> None:

            if (r, c) in visited:
                return

            if not self.inBounds(r, c, rows, cols):
                return

            if heights[r][c] < prevHeight:
                return

            visited.add((r, c))

            up = (r - 1, c)
            down = (r + 1, c)
            left = (r, c - 1)
            right = (r, c + 1)
            for i, j in [up, down, left, right]:
                dfs(i, j, visited, heights[r][c])

        for r in range(rows):
            dfs(r, 0, visitedPacific, heights[r][0])
            dfs(r, cols - 1, visitedAtlantic, heights[r][cols - 1])
        for c in range(cols):
            dfs(0, c, visitedPacific, heights[0][c])
            dfs(rows - 1, c, visitedAtlantic, heights[rows - 1][c])

        return list(visitedPacific.intersection(visitedAtlantic))

    def inBounds(self, i: int, j: int, rows: int, cols: int):
        return i < rows and i >= 0 and j < cols and j >= 0
