import assert from "assert";
import { Question } from "../types/Question";

const starterCodeSingleNumber = `function singleNumber(nums) {
  // Write your code here
};`;

const handlerSingleNumber = (fn: any) => {
  try {
    const inputs = [
      [2,2,1],
      [4,1,2,1,2],
      [1]
    ];
    const outputs = [1, 4, 1];

    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assert.strictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("singleNumber handler function error");
    throw new Error(error);
  }
};

export const singleNumber: Question = {
  id: "single-number",
  title: "136. Single Number",
  description: `<p class='mt-3'>
  Given a non-empty array of integers <code>nums</code>, every element appears twice except for one. Find that single one.
  You must implement a solution with a linear runtime complexity and use only constant extra space.
  </p>`,
  handlerFunction: handlerSingleNumber,
  starterCode: starterCodeSingleNumber,
  order: 4,
  starterFunctionName: "function singleNumber(",
  solution: `function singleNumber(nums) {
  return nums.reduce((a, b) => a ^ b);
}`,
};

export const singleNumberSolution = `function singleNumber(nums) {
  return nums.reduce((a, b) => a ^ b);
}`;