import React, { useRef } from 'react';

const TodoForm = React.memo(({ onAdd }) => {
    const textRef = useRef(null);

    const handleSubmit = (e) => {
        if (!textRef.current) {
            return;
        }
        e.preventDefault();

        const text = textRef.current.value;

        if (!text.trim()) {
            return;
        }

        onAdd(text);
        textRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-5">
            <input
                type="text"
                ref={textRef}
                placeholder="새로운 할 일을 입력하세요"
                className="flex-1 p-2.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="px-4 py-2.5 bg-blue-500 text-white border-none rounded-r-md cursor-pointer hover:bg-blue-600"
            >
                추가
            </button>
        </form>
    );
});

export default TodoForm;
