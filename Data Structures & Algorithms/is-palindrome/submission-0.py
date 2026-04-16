class Solution:
    def isPalindrome(self, s: str) -> bool:
        # trim alpha numeric characters
        an_only: str = s.replace(" ", "")
        an_only: str = "".join(char.lower() for char in an_only if char.isalnum())
        h, t = 0, len(an_only) - 1
        while h <= t:
            if an_only[h] != an_only[t]:
                return False
            h += 1
            t -= 1
        return True
