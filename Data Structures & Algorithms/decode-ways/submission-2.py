class Solution:
    def numDecodings(self, s: str) -> int:
        validSet = (
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
        )

        if len(s) == 1:
            if s == "0":
                return 0
            return 1

        memo = [1, 1]

        for i in range(len(s)):
            ways = 0
            # case 1 - take last digit
            if s[i] in validSet:
                ways += memo[1]
            # case 2 - take 2 last digits
            if i >= 1 and s[i - 1 : i + 1] in validSet:
                ways += memo[0]

            tmp = memo[1]
            memo[1] = ways
            memo[0] = tmp

        return memo[-1]
