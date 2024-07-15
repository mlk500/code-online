import assert from "assert";
import { Question } from "../types/Question";

const starterCodeFizzBuzz = `function fizzBuzz(n) {
  // Write your code here
};`;

const handlerFizzBuzz = (fn: any) => {
  try {
    const inputs = [3, 5, 15];
    const outputs = [
      ["1","2","Fizz"],
      ["1","2","Fizz","4","Buzz"],
      ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
    ];

    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assert.deepStrictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("fizzBuzz handler function error");
    throw new Error(error);
  }
};

export const fizzBuzz: Question = {
  id: "fizz-buzz",
  title: "412. Fizz Buzz",
  description: `<p class='mt-3'>
  Given an integer <code>n</code>, return a string array <code>answer</code> (1-indexed) where:
  <ul>
    <li><code>answer[i] == "FizzBuzz"</code> if <code>i</code> is divisible by 3 and 5.</li>
    <li><code>answer[i] == "Fizz"</code> if <code>i</code> is divisible by 3.</li>
    <li><code>answer[i] == "Buzz"</code> if <code>i</code> is divisible by 5.</li>
    <li><code>answer[i] == i</code> (as a string) if none of the above conditions are true.</li>
  </ul>
  </p>`,
  handlerFunction: handlerFizzBuzz,
  starterCode: starterCodeFizzBuzz,
  order: 2,
  starterFunctionName: "function fizzBuzz(",
  solution: `function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i.toString());
  }
  return result;
}`,
};

export const fizzBuzzSolution = `function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i.toString());
  }
  return result;
}`;