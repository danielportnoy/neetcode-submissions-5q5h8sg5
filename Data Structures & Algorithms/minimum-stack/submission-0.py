class MinStack:
    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, val: int) -> None:
        self.stack.insert(0, val)
        if not self.minStack or val < self.minStack[0]:
            self.minStack.insert(0, val)
        else:
            self.minStack.insert(0, self.minStack[0])

    def pop(self) -> None:
        self.stack.pop(0)
        self.minStack.pop(0)

    def top(self) -> int:
        return self.stack[0]

    def getMin(self) -> int:
        return self.minStack[0]
