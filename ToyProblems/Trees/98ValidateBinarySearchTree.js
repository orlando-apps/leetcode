// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.



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
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true;
 return validate(root, null, null)
};

var validate = function (node, max, min){
  if (!node) return true;
  if (max !== null && node.val >= max || min !== null && node.val <= min) return false;
  //!== null to avoid -1
  //
  return validate(node.left, node.val, min) && validate(node.right, max, node.val)
  //when we go left
          // basic - require curr node.val to be less than the parent value (max)
          // secondary - greater than min need to take account previous parents
          // ex: 11 needs to greater than 10 (min)
  //when we go right
          // basic - require curr node.val to be greater than the parent value (min)
          // secondary - less than max b/c need to take account previous parents
          // ex: 6 needs to be less than 10 (max)
}

       //      10
       //    /    \
       //   5      15
       //  / \    / \
       // 3  6   11  16


//Time: O(n), where n is every node in the tree
//Time: O(n), if tree looks like a linked list