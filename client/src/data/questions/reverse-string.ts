import assert from "assert";
import { Question } from "../types/Question";

const starterCodeReverseString = `function reverseString(s) {
  // Write your code here
};`;

const handlerReverseString = (fn: any) => {
  try {
    const inputs = [
      ["h","e","l","l","o"],
      ["H","a","n","n","a","h"]
    ];
    const outputs = [
      ["o","l","l","e","h"],
      ["h","a","n","n","a","H"]
    ];

    for (let i = 0; i < inputs.length; i++) {
      const input = [...inputs[i]];  
      fn(input);
      assert.deepStrictEqual(input, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("reverseString handler function error");
    throw new Error(error);
  }
};

export const reverseString: Question = {
  id: "reverse-string",
  title: "344. Reverse String",
  description: `<p class='mt-3'>
  Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.
  You must do this by modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a> with <code>O(1)</code> extra memory.
  </p>`,
  handlerFunction: handlerReverseString,
  starterCode: starterCodeReverseString,
  order: 3,
  starterFunctionName: "function reverseString(",
  solution: `function reverseString(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}`,
};

export const reverseStringSolution = `function reverseString(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}`;