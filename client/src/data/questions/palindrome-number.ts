import assert from "assert";
import { Question } from "../types/Question";

const starterCodePalindromeNumber = `function isPalindrome(x) {
  // Write your code here
};`;

const handlerPalindromeNumber = (fn: any) => {
  try {
    const inputs = [121, -121, 10, 1221];
    const outputs = [true, false, false, true];

    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assert.strictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("isPalindrome handler function error");
    throw new Error(error);
  }
};

export const palindromeNumber: Question = {
  id: "palindrome-number",
  title: "9. Palindrome Number",
  description: `<p class='mt-3'>
  Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.
  </p>`,
  handlerFunction: handlerPalindromeNumber,
  starterCode: starterCodePalindromeNumber,
  order: 1,
  starterFunctionName: "function isPalindrome(",
  solution: `function isPalindrome(x) {
  if (x < 0) return false;
  return x === Number(x.toString().split('').reverse().join(''));
}`,
};

export const palindromeNumberSolution = `function isPalindrome(x) {
  if (x < 0) return false;
  return x === Number(x.toString().split('').reverse().join(''));
}`;