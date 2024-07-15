import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import { questions } from '@/data/questions';
import { Question } from '@/data/types/Question';
import React, { useState } from 'react';

type CodeBlockPageProps = {
    question: Question;
};

const CodeBlockPage: React.FC<CodeBlockPageProps> = ({ question }) => {
    const [role, setRole] = useState<'mentor' | 'student' | null>(null);

    return (
        <div>
            <Topbar role={role} />
            <Workspace question={question} setRole={setRole} />
        </div>
    );
}
export default CodeBlockPage;

export async function getStaticPaths() {
    const paths = Object.keys(questions).map((key) => ({
        params: { qid: key },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { qid: string } }) {
    const qid = params?.qid as string;
    const question = questions[qid];

    if (!question) {
        return {
            notFound: true,
        };
    }
    question.handlerFunction = question.handlerFunction.toString();
    return {
        props: {
            question: {
                ...question,
                id: qid,
            }
        },
    };
}