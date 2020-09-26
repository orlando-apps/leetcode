// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3


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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let result = [];
  if(!root) return result
  var dfs = function(node, curr){
      if (!node.left && !node.right){
          result.push(curr + node.val)
      } else {
          node.left && dfs(node.left, curr + node.val + '->')
          node.right && dfs(node.right, curr + node.val + '->')
      }
  }
  dfs (root, '')
  return result;
};

//Time: O(n) where n is the total number of nodes in the tree
//Space: O(n) when height of tree stack can be the entire tree itself, so visit all the nodes worst case.