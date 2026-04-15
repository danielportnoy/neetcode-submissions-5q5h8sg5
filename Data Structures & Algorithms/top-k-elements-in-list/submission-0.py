class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequencyMap = {}
        for num in nums:
            frequencyMap[num] = frequencyMap.get(num, 0) + 1
        frequencyList = sorted(frequencyMap.items(), key=lambda x: x[1], reverse=True)
        return [num for num, freq in frequencyList[:k]]