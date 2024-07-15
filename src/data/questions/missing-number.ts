import assert from "assert";
import { Question } from "../types/Question";

const starterCodeMissingNumber = `function missingNumber(nums) {
  // Write your code here
};`;

const handlerMissingNumber = (fn: any) => {
  try {
    const inputs = [
      [3,0,1],
      [0,1],
      [9,6,4,2,3,5,7,0,1]
    ];
    const outputs = [2, 2, 8];

    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assert.strictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("missingNumber handler function error");
    throw new Error(error);
  }
};

export const missingNumber: Question = {
  id: "missing-number",
  title: "268. Missing Number",
  description: `<p class='mt-3'>
  Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return the only number in the range that is missing from the array.
  </p>`,
  handlerFunction: handlerMissingNumber,
  starterCode: starterCodeMissingNumber,
  order: 5,
  starterFunctionName: "function missingNumber(",
  solution: `function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}`,
};

export const missingNumberSolution = `function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}`;