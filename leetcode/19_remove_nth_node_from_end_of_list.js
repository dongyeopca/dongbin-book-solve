var removeNthFromEnd = function (head, n) {
  let tempList = new ListNode(0);
  tempList.next = head;

  // set variables for next node and current node
  let slow = tempList;
  let fast = tempList;

  // set fast to n nodes ahead of slow
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // While we haven't reached the end of the list
  // set slow to n nodes behind fast
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // set slow.next to two nodes ahead of slow
  // then return the nth node of the list
  slow.next = slow.next.next;
  return tempList.next;
};
