// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1


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
 * @return {TreeNode}
 */
// recursive
var invertTree = function(root) {
  return dfs(root)
};


var dfs = function(node){
   if (!node) return null;

  let left = dfs(node.left);
  let right = dfs(node.right);

  node.left = right;
  node.right = left;

  return node; // this is required. Otherwise node.left = error handling return not in function, setting it to null
}



//top down
// var invertTree = function(root) {
//     var dfs = function(node){
//         if(!node) return;
//         [node.left, node.right] = [node.right, node.left];
//         dfs(node.left);
//         dfs(node.right)
//     }
//     dfs(root)
//     return root
// };