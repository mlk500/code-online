export type CodeBlock = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
};

export const questions: CodeBlock[] = [
	{
		id: "palindrome-number",
		title: "Palindrome Number",
		difficulty: "Easy",
		category: "Math",
		order: 1,
	},
	{
		id: "fizz-buzz",
		title: "Fizz Buzz",
		difficulty: "Medium",
		category: "String",
		order: 2,
	},
	{
		id: "reverse-string",
		title: "Reverse String",
		difficulty: "Easy",
		category: "Two Pointers",
		order: 3,
	},
	{
		id: "single-number",
		title: "Single Number",
		difficulty: "Hard",
		category: "Bit Manipulation",
		order: 4,
		},
	{
		id: "missing-number",
		title: "Missing Number",
		difficulty: "Easy",
		category: "Math",
		order: 5,
	}
];