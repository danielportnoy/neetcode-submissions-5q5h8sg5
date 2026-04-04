/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    let res = new ListNode();
    let node = res;

    if (list1 == null) return list2;
    if (list2 == null) return list1;

    let p1 = list1;
    let p2 = list2;

    while (p1 != null && p2 != null) {
      console.log(`p1: ${p1.val}, p2: ${p2.val}`);
      if (p1.val < p2.val) {
        console.log(`p1.val < p2.val, pushing p1.val: ${p1.val}`);
        node.next = new ListNode(p1.val);
        node = node.next;
        p1 = p1.next;
      } else {
        console.log(`p1.val >= p2.val, pushing p2.val: ${p2.val}`);
        node.next = new ListNode(p2.val);
        node = node.next;
        p2 = p2.next;
      }
    }

    while (p1 != null) {
      console.log(`p1: ${p1.val}`);
      node.next = new ListNode(p1.val);
      node = node.next;
      p1 = p1.next;
    }

    while (p2 != null) {
      console.log(`p2: ${p2.val}`);
      node.next = new ListNode(p2.val);
      node = node.next;
      p2 = p2.next;
    }

    return res.next;
  }
}
