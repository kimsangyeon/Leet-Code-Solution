/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const maxWidth = [1];

/**
 * @param {TreeNode} root
 * @return {number}
 */
const widthOfBinaryTree = function(root) {
  if (!root.val) return 0;
  if (root.left !== null) findMaxWidth(root.left, 1, 1);
  if (root.right !== null) findMaxWidth(root.right, 1, 2);

  return Math.max(...maxWidth);
};

/**
 * 
 * @param {TreeNode} node 
 * @param {number} depth 
 * @param {number} index 
 */
const findMaxWidth = (node, depth, index) => {
  if (!node.val) return 0;
  if (maxWidth[depth] < index || !maxWidth[depth]) maxWidth[depth] = index;

  if (node.left !== null) findMaxWidth(node.left, depth + 1, index * 2 - 1);
  if (node.right !== null) findMaxWidth(node.right, depth + 1, index * 2);
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}
const left2 = new TreeNode(5);
const right2 = new TreeNode(3);
const left1 = new TreeNode(3, left2, right2);
const root = new TreeNode(1, left1, null);

console.log(widthOfBinaryTree(root));
