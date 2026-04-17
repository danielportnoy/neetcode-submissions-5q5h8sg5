class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:

        stack = []
        result = [0] * len(temperatures)

        for i, temp in enumerate(temperatures):
            while stack and temp > stack[-1][1]:
                j, prev_temp = stack.pop()
                result[j] = i - j

            stack.append((i, temp))

        return result
