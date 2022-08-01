function hasCycle(head) {
  if (!head) return false
  let p1 = head, p2 = head.next;
  while (p1 !== p2) {
    if (!p1 || !p2) return false
    p1 = p1.next;
    p2 = p2.next?.next;
  }
  return true;
}

hasCycle();
