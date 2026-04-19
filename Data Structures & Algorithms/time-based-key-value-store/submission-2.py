class TimeMap:
    def __init__(self):
        self.map = defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.map[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.map:
            return ""
        items = self.map[key]

        l, r = 0, len(items) - 1
        res = ""
        while l <= r:
            m = (l + r) // 2
            prev_timestamp, value = items[m]
            if prev_timestamp <= timestamp:
                res = value
                l = m + 1
            else:
                r = m - 1

        return res