class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        if l1.next is None and l1.val == 0:
            return l2
        if l2.next is None and l2.val == 0:
            return l1

        l1_digits, l2_digits = 1, 1
        tail1, tail2 = l1, l2

        while tail1.next is not None:
            tail1 = tail1.next
            l1_digits += 1

        while tail2.next is not None:
            tail2 = tail2.next
            l2_digits += 1

        res = l1 if l1_digits > l2_digits else l2
        node1, node2, node = l1, l2, res
        carry = 0
        while node is not None:
            a = node1.val if node1 is not None else 0
            b = node2.val if node2 is not None else 0
            sum = a + b + carry
            carry = sum // 10
            node.val = sum % 10
            node1 = node1.next if node1 is not None else None
            node2 = node2.next if node2 is not None else None
            node = node.next

        if carry > 0:
            node = res
            while node.next is not None:
                node = node.next
            node.next = ListNode(carry)
        return res
