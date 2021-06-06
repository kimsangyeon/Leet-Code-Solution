/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}
// const left2 = new TreeNode(5);
// const right2 = new TreeNode(3);
// const right3 = new TreeNode(9);
// const left1 = new TreeNode(3, left2, right2);
// const right1 = new TreeNode(2, null, right3);
// const root = new TreeNode(1, left1, right1);

const left2 = new TreeNode(3);
const right2 = new TreeNode(3);
const left3 = new TreeNode(5);
const left1 = new TreeNode(1, left2, null);
const right1 = new TreeNode(4, left3, null);
const root = new TreeNode(2, left1, right1);


const widthOfBinaryTree = (root) => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let max = 1;
  const queue = [[root, 1]];

  while(queue.length > 0) {
    const length = queue.length;
    let start = Number.MAX_VALUE;
    let end = 0;

    for (let i = 0; i < length; i++) {
      const [root, index] = queue.shift();
      const left = root.left;
      const right = root.right;

      if (left) {
        queue.push([left, index * 2 - 1]);
        start = Math.min(start, index * 2 - 1);
        end = Math.max(end, index * 2 - 1);
      }
      if (right) {
        queue.push([right, index * 2]);
        start = Math.min(start, index * 2);
        end = Math.max(end, index * 2);
      }
    }

    max = Math.max(max, end - (start - 1));
  }

  return max;
};

console.log(bfs(root));