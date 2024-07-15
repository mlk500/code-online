import React, { useState, useCallback, useEffect, useRef } from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import { Question } from '@/data/types/Question';
import EditorFooter from "../EditorFooter";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import Confetti from 'react-confetti';
import useSocket from '@/hooks/useSocket';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

type PlaygroundProps = {
    question: Question;
    setRole: React.Dispatch<React.SetStateAction<'mentor' | 'student' | null>>;
};

const Playground: React.FC<PlaygroundProps> = ({ question, setRole }) => {
    const [showSolution, setShowSolution] = useState(false);
    const [code, setCode] = useState(question.starterCode);
    const [showSmiley, setShowSmiley] = useState(false);
    const [isMentor, setIsMentor] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const socket = useSocket("https://code-online-server-6xdt7697b-mlk500s-projects.vercel.app");
    const roleRef = useRef<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (socket && question.id) {
            socket.emit('join', question.id);

            socket.on('role', (role: 'mentor' | 'student') => {
                roleRef.current = role;
                setIsMentor(role === 'mentor');
                setRole(role);
            });

            socket.on('codeChange', (newCode: string) => {
                setCode(newCode);
            });

            socket.on('solutionFound', () => {
                setShowSmiley(true);
            });

            socket.on('error', (message: string) => {
                console.error('Received error:', message);
                setIsDisabled(true);
                toast.error(message, {
                    duration: 2000,
                    position: 'top-center',
                });
                setTimeout(() => {
                    router.push('/');
                }, 2000);
            });

            socket.on('showToast', (toastData) => {
                if (toastData.type === 'success') {
                    toast.success(toastData.message, {
                        duration: 3000,
                        position: 'top-center',
                    });
                } else if (toastData.type === 'custom') {
                    toast.custom((t) => (
                        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
                            <div className="flex-1 w-0 p-4">
                                <div className="flex items-start">
                                    <div className="ml-3 flex-1">
                                        <p className="text-sm font-medium text-gray-900">
                                            {toastData.title}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {toastData.message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ), {
                        duration: 5000,
                        position: 'top-center',
                    });
                }
            });

            return () => {
                socket.off('role');
                socket.off('codeChange');
                socket.off('solutionFound');
                socket.off('error');
                socket.off('showToast');
            };
        }
    }, [socket, question.id, setRole, router]);

    const handleCodeChange = (value: string) => {
        if (isDisabled) return;
        setCode(value);
        if (socket && !isMentor) {
            socket.emit('codeChange', { room: question.id, code: value });
        }
    };

    const handleSubmit = () => {
        if (isDisabled) return;
        if (code.trim() === question.solution.trim()) {
            setShowSmiley(true);
            if (socket) {
                socket.emit('solutionFound', question.id);
                socket.emit('showToast', {
                    room: question.id,
                    type: 'success',
                    message: 'Correct solution! Great job!'
                });
            }
        } else {
            setShowSmiley(false);
            if (socket) {
                socket.emit('showToast', {
                    room: question.id,
                    type: 'custom',
                    title: 'Not quite right',
                    message: 'Your solution is incorrect. Keep trying!'
                });
            }
        }
    };

    const toggleSolution = () => {
        if (isDisabled) return;
        setShowSolution(!showSolution);
        if (!showSolution) {
            setCode(question.solution);
        } else {
            setCode(question.starterCode);
        }
        if (socket) {
            socket.emit('codeChange', { room: question.id, code: !showSolution ? question.solution : question.starterCode });
        }
    };

    const handleSmileyDismiss = useCallback(() => {
        setShowSmiley(false);
    }, []);

    return (
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
            <Toaster />
            <PreferenceNav />
            <div className='w-full overflow-auto'>
                <CodeMirror
                    value={code}
                    theme={vscodeDark}
                    onChange={handleCodeChange}
                    extensions={[javascript()]}
                    style={{ fontSize: 16 }}
                    editable={!isMentor && !isDisabled}
                />
            </div>
            <EditorFooter
                handleSubmit={handleSubmit}
                toggleSolution={toggleSolution}
                showSolution={showSolution}
                isMentor={isMentor}
                isDisabled={isDisabled}
            />
            {showSmiley && (
                <>
                    <div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-dark-layer-1 bg-opacity-80"
                        onClick={handleSmileyDismiss}
                    >
                        <span className="text-9xl">😊</span>
                    </div>
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        recycle={false}
                        numberOfPieces={200}
                    />
                </>
            )}
        </div>
    );
}

export default Playground;