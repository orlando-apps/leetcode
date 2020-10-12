// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let result = [];
  if (!root) return result
  let queue = [];
  queue.push(root);
  while(queue.length > 0){
      let len = queue.length;
      for ( let i = 0; i < len; i++){
          let node = queue.shift(); // only add far right in each row. Remembers which one it is by the len, even though we add more nodes to queue
          if (i === len - 1) result.push(node.val);//push only the most right of tree
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
  }
  return result;
};


//Time: O(n) have to go thru entire tree, where is n is the number of nodes in the tree.
//Space: O(D) to keep the queue, where D is the diameter of the tree.