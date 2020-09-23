// Given a node from a Circular Linked List which is sorted in ascending order, write a function to insert a value insertVal into the list such that it remains a sorted circular list. The given node can be a reference to any single node in the list, and may not be necessarily the smallest value in the circular list.

// If there are multiple suitable places for insertion, you may choose any place to insert the new value. After the insertion, the circular list should remain sorted.

// If the list is empty (i.e., given node is null), you should create a new single circular list and return the reference to that single node. Otherwise, you should return the original given node.

// Input: head = [], insertVal = 1
// Output: [1]
// Explanation: The list is empty (given head is null). We create a new single circular list and return the reference to that single node.

// Input: head = [1], insertVal = 0
// Output: [1,0]

/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
  // 1. Edge Case.
  if(head === null) {
      head = new Node(insertVal);
      head.next = head
      return head;
  }

  let prev = head
  let curr = prev.next

  // 2. Loop ends where we can't find an insert point, this happens all values are the same.
  while (curr != head){
      // 3. We are at the sorted Pivot, we can decide if our insertion point is the new Pivot
      if (prev.val > curr.val){
          console.log(prev.val, curr.val, head.val, "pivot")
          //we may not be at the entrance. ex. 3 => 4 => 1, pivot at 3 & 1, but could break at 4 & 1
          // insertVal >= prev.val, ex: could be ascending
          // insertVal <= curr.val, ex: could be 0 or negative or same as curr.val
          // Note curr is at entrance
          if (insertVal >= prev.val || insertVal <= curr.val) break;
      }
      // 4. finally we found an insertion point where prev.val < insertVal < cur.val
      if (prev.val < insertVal && insertVal <= curr.val) break;
      prev = curr;
      curr = curr.next
  }

  prev.next = new Node(insertVal, curr)
  return head;
};