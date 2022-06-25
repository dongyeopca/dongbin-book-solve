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
var mergeTwoLists = function (list1, list2) {
  const answer = new ListNode();
  let copy = answer;
  let linked1 = list1;
  let linked2 = list2;
  while (linked1 && linked2) {
    if (linked1.val <= linked2.val) {
      copy.next = linked1;
      linked1 = linked1.next;
    } else {
      copy.next = linked2;
      linked2 = linked2.next;
    }
    copy = copy.next;
  }
  if (linked1 == null) {
    copy.next = linked2;
  } else if (linked2 == null) {
    copy.next = linked1;
  }
  return answer.next;
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
