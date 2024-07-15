import { Question } from "../types/Question";
import { palindromeNumber } from "./palindrome-number";
import { fizzBuzz } from "./fizz-buzz";
import { missingNumber } from "./missing-number";
import { reverseString } from "./reverse-string";
import { singleNumber } from "./single-number";

interface QuestionMap {
	[key: string]: Question;
}

export const questions: QuestionMap = {
	"palindrome-number": palindromeNumber,
	"fizz-buzz": fizzBuzz,
	"missing-number": missingNumber,
	"reverse-string": reverseString,
	"single-number": singleNumber,
};