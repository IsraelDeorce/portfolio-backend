/*
Binary Tree Level Order Traversal
Given the root of a binary tree, return the level order traversal of its nodes' values.
(i.e., from left to right, level by level).
*/

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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root) return [];
  const queue = [];
  const answer = [];
  queue.push(root);
  let nPerLevel = 1;
  let level = 0;

  while (queue.length) {
    const n = queue.shift();
    nPerLevel--;
    
    if (!answer[level]) answer[level] = [];
    answer[level].push(n.val);
    
    if (n.left) queue.push(n.left);
    if (n.right) queue.push(n.right);
    
    if (!nPerLevel) {
      level++
      nPerLevel = queue.length
    }
  }
  return answer;
};
