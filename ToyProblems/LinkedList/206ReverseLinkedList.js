
// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?



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


// var reverseList = function(head) {
//     let curr = head
//     let prev = null
//     while(curr){
//         let tmp = curr.next
//         curr.next = prev
//         prev = curr
//         curr = tmp
//     }
//     head = prev
//     return head;
// };

//O(n) time
//O(1) space


var reverseList = function(head) {
  if(!head) return head;
  head = search(head)
  return head;
};

var search = function (node){
  if(!node.next) return node;
  let head = search(node.next) // we use this to get to the last node and
  node.next.next = node //set node.next is the next node and re set it to the
  node.next = null // this will ultimately set the original first node to null
  return head //return the last node, will be  head
}

// Time complexity : O(n). Assume that nn is the list's length, the time complexity is O(n).
// Space complexity : O(n). The extra space comes from implicit stack space due to recursion. The recursion could go up to nn levels deep.