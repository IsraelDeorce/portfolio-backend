/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  // return reverseListRecursive(head);
  return reverseListIterative(head);
};

const reverseListRecursive = (head) => {
  if (!head || !head.next) return head;
  let tmp = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return tmp;
}

const reverseListIterative = (head) => {
  if (!head || !head.next) return head;

  let prev = null;
  let curr = head;
  let nextTmp = curr.next;

  while (curr) {
    nextTmp = curr.next;
    curr.next = prev;
    prev = curr
    curr = nextTmp;
  }

  return prev;
}  

console.log(reverseList())
