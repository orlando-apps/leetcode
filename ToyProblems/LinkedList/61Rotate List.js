// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// Example 1:

// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
// Example 2:

// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(!head) return head;
  if(!head.next) return head;
  let len = linkLength(head)
  let newHead;
  let newTail = head;
  console.log(len - k % len -1)
  for (let i = 0; i < len - k % len -1; i++){ // len - k % len gets the difference that need to travel
                                              // - 1 get one back to the new tail instead of new head
                                              //Note: if there are 3 nodes, you only need to move 2 times to reach the 3rd. we are starting at the first node.
      newTail = newTail.next
  }
  newHead = newTail.next // goes to the otherside because we may not need to move newTail at all
  newTail.next = null
  return newHead;
};

var linkLength = function(head){
  let count = 1
  let curr = head
  while(curr.next !== null ){
      count++
      curr = curr.next
  }
  curr.next = head
  return count
}