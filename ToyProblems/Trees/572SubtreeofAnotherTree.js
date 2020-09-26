// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.


// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.







/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */



var isSubtree = function(s, t) {
  if(s === null) return false;
  return dfs (s, t)
};

var dfs = function(node, t){
  if(!node) return false;

  if(node.val === t.val){
      if(dfs2(node, t)){
          return true;
      }
  }


  return dfs(node.left, t) || dfs(node.right, t)


//     let bool1 = dfs(node.left,t)
//     let bool2 = dfs(node.right, t)

//     if (bool1 || bool2 ) {
//         return true;
//     } else{
//         return false;
//     }

  //it is possible that node.left can finish first and return false without checking node.right, so need add the "or"
  //***Need to check
}


//check if two trees are the same
var dfs2 = function(node, t){
  if (node && t){
      if (node.val !== t.val) {
          return false
      }else{
          return dfs2(node.left, t.left) && dfs2(node.right, t.right) // need to do && because it is possible that one left side finish first and return true without checking the right.
      }
  } else if(!node && !t){
      return true;
  } else {
      return false
  }
}

//having issues with checking
// both valid
// both invalid
// one is invalid