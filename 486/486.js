/**
 * @param {number[]} nums
 * @return {boolean}
 */
const PredictTheWinner = function(nums) {
  return PickNum(nums, 0, nums.length - 1 , 1) >= 0;
};

const PickNum = (nums, start, end, turn) => {
  if (start === end) return turn * nums[start];

  const left = turn * nums[start] + PickNum(nums, start + 1, end, -turn);
  const right = turn * nums[end] + PickNum(nums, start, end - 1, -turn);
  return turn * Math.max(turn * left, turn * right);
};

console.log(PredictTheWinner([1,5,2]));
console.log(PredictTheWinner([1,5,233,7]));

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const PredictTheWinner2 = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    
  }
};