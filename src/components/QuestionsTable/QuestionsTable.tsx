import Link from "next/link";
import React from "react";
import { questions } from "@/data/codeBlocks/questionsBlock";

type QuestionsTableProps = {};

const QuestionsTable: React.FC<QuestionsTableProps> = () => {
    return (
        <tbody className='text-gray-400'>
            {questions.map((question, idx) => {
                const difficulyColor =
                    question.difficulty === "Easy"
                        ? "text-dark-green-s"
                        : question.difficulty === "Medium"
                            ? "text-dark-yellow"
                            : "text-dark-pink";
                return (
                    <tr className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`} key={question.id}>
                        <td className='px-6 py-4'>
                            <Link
                                className='hover:text-[#44BAE9] cursor-pointer transition-colors duration-200'
                                href={`/questions/${question.id}`}
                            >
                                {question.title}
                            </Link>
                        </td>
                        <td className={`px-6 py-4 ${difficulyColor}`}>{question.difficulty}</td>
                        <td className={"px-6 py-4"}>{question.category}</td>
                    </tr>
                );
            })}
        </tbody>
    );
};
export default QuestionsTable;