
//https://www.youtube.com/watch?v=5cPbNCrdotA
//Inorder
//1. Visit left-subtree
//2. Vist root
//3. Vist right-subtree
//Nodes at the left is lesser then root. Nodes at right are greater.
//Elements are sorted in sorted order, increasing


//Case 1: Node has right subtree
  //Go deep to leftmost node in right subtree OR find min in right subtree
//Case 2: No right subtree
  //Go to the nearest ancestor for which given node would be in the left subtree

//Successor has node at its left subtree.

//Inorder(root){
if (root === null){
    return;
  }else{
    inorder(node.left)
    console.log(node.val)
    inorder(node.right)
  }
}