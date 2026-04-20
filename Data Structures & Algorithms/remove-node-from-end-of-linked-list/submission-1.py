# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        node = head
        size = 0

        while node is not None:
            node = node.next
            size += 1

        removeIndex = size - n
        if removeIndex == 0:
            return head.next

        node = head
        for i in range(size - 1):
            if (i + 1) == removeIndex:
                node.next = (node.next).next
            node = node.next

        return head
