import React from 'react';
import Split from 'react-split';
import QuestionDescription from './QuestionDescription/QuestionDescription';
import Playground from './Playground/Playground';
import { Question } from '@/data/types/Question';

type WorkspaceProps = {
    question: Question;
    setRole: React.Dispatch<React.SetStateAction<'mentor' | 'student' | null>>;

};

const Workspace: React.FC<WorkspaceProps> = ({ question, setRole }) => {
    return (
        <Split className='split' minSize={0}>
            <QuestionDescription question={question} />
            <Playground question={question} setRole={setRole} />
        </Split>
    )
}
export default Workspace;