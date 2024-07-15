type EditorFooterProps = {
    handleSubmit: () => void;
    toggleSolution?: () => void;
    showSolution?: boolean;
    isMentor: boolean;
    isDisabled: boolean;
};

export const EditorFooter: React.FC<EditorFooterProps> = ({ handleSubmit, toggleSolution, showSolution, isMentor, isDisabled }) => {
    return (
        <div className='flex bg-dark-layer-1 absolute bottom-0 z-10 w-full'>
            <div className='mx-5 my-[10px] flex justify-between w-full'>
                <div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
                </div>
                <div className='ml-auto flex items-center space-x-4'>
                    <button
                        className={`px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex ${isMentor || isDisabled
                            ? 'bg-dark-fill-3 text-dark-label-2 cursor-not-allowed'
                            : 'bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-label-2'
                            } rounded-lg`}
                        onClick={isMentor || isDisabled ? undefined : toggleSolution}
                        disabled={isMentor || isDisabled}
                    >
                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                    </button>
                    <button
                        className={`px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm ${isMentor || isDisabled
                            ? 'bg-dark-green-s text-dark-label-2 cursor-not-allowed'
                            : 'text-white bg-dark-green-s hover:bg-green-3'
                            } rounded-lg`}
                        onClick={isMentor || isDisabled ? undefined : handleSubmit}
                        disabled={isMentor || isDisabled}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditorFooter;
