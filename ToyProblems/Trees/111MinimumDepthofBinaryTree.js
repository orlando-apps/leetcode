// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.



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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  return dfs (root, 0) // need initial 1 because the node.right && node.left check returns before incrementing
};

var dfs = function(node, curr){
  if(!node) return Infinity
  if(!node.right && !node.left) return curr +1;
  // need  + 1 because the node.right && node.left check returns before incrementing another 1 to account for root
  //both left and right need to be are null. require to work one root and 1 leaf

  let left = dfs(node.left, curr + 1);
  let right =  dfs(node.right, curr + 1);

  return Math.min(left, right)
}


