export type Question = {
	id: string;
	title: string;
	description: string;
	order: number;
	starterCode: string;
	handlerFunction: ((fn: any) => boolean) | string;
	starterFunctionName: string;
    solution: string;
};

