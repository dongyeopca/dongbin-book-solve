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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var middleNode = function (head) {
  let copy = head;
  let temp = [];
  while (head) {
    temp.push(head.val);
    head = head.next;
  }
  let length = parseInt(temp.length / 2);
  let index = 0;
  while (index != length) {
    console.log(copy);
    index++;
    copy = copy.next;
  }
  return copy;
};
