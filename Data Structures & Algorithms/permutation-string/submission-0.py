from collections import Counter


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False
        s1_count = Counter(s1)
        s2_count = Counter(s2[: len(s1)])
        if s1_count == s2_count:
            return True
        for i in range(len(s1), len(s2)):
            removed_char = s2[i - len(s1)]
            added_char = s2[i]
            s2_count[added_char] = s2_count.get(added_char, 0) + 1
            s2_count[removed_char] = s2_count.get(removed_char, 0) - 1

            if s1_count == s2_count:
                return True
        return False
