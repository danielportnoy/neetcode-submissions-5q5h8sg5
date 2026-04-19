class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        minimums = [0] * len(prices)
        maximums = [0] * len(prices)

        minimum = prices[0]
        for i in range(len(prices)):
            minimum = min(minimum, prices[i])
            minimums[i] = minimum

        maximum = prices[len(prices) - 1]
        for i in range(len(prices) - 1, -1, -1):
            maximum = max(maximum, prices[i])
            maximums[i] = maximum

        profits = [maximums[i] - minimums[i] for i in range(len(prices))]

        return max(profits)
