/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const answer = new ListNode();
  let cur = answer;
  let over = false;
  let val = l1.val + l2.val;
  if (val > 9) {
    over = true;
    val = (l1.val + l2.val) % 10;
  }
  cur.val = val;
  console.log(val);
  while (l1.next || l2.next) {
    l1 = l1.next || new ListNode();
    l2 = l2.next || new ListNode();
    cur.next = new ListNode();
    cur = cur.next;
    let val = l1.val + l2.val;
    if (over) {
      val++;
      over = false;
    }
    if (val > 9) {
      over = true;
      val = val % 10;
    }
    cur.val = val;
  }
  if (over) {
    cur.next = new ListNode(1);
  }
  return answer;
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
