// Sort a linked list using insertion sort.


// A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
// With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list


// Algorithm of Insertion Sort:

// Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// It repeats until no input elements remain.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

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
var insertionSortList = function(head) {
  let dummy_head = new ListNode() //head before the actual head
  let curr = head;
  while(curr){
      let prev_pointer = dummy_head;
      let next_pointer = dummy_head.next;
      while (next_pointer){
          if (curr.val < next_pointer.val) break;
          prev_pointer = prev_pointer.next;
          next_pointer = next_pointer.next;
      }
      let temp = curr.next //keep track of curr.next before updating
      curr.next = next_pointer;
      prev_pointer.next = curr;
      curr = temp //update and check the next linkedlist node

      //first loop through prev_pointer = [0, 4], next_pointer = null
      console.log('2', prev_pointer, next_pointer)
  }
  return dummy_head.next;
};