/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 const mergeTwoListsRecursive = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoListsRecursive(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoListsRecursive(list1, list2.next);
    return list2;
  }
};
  

const mergeTwoListsIterative = (list1, list2) => {
  let list0 = new ListNode()
  let head = list0
      
  while (list1 && list2) {
    if(list1.val < list2.val) {
      list0.next = list1
      list1 = list1.next
    } else {
      list0.next = list2
      list2 = list2.next
    }
    list0 = list0.next
  }
  
  if(!list1) list0.next = list2
  else list0.next = list1
  
  return head.next
};
  
mergeTwoListsRecursive()
