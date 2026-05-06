class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:

        res = [0, 0]
        for i in range(2, len(cost) + 1):
            tmp = res[1]
            res[1] = min(cost[i - 1] + res[1], cost[i - 2] + res[0])
            res[0] = tmp
        return res[len(res) - 1]
