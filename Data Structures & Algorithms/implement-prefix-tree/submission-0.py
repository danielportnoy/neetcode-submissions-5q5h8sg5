class PrefixTreeNode:
    def __init__(self, children=None):
        self.children = children if children is not None else {}
        self.end_of_word = False


class PrefixTree:
    def __init__(self):
        self.root = PrefixTreeNode()

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = PrefixTreeNode()
            node = node.children[char]
        node.end_of_word = True

    def search(self, word: str) -> bool:
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.end_of_word

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True
