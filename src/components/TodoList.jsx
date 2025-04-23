import React from 'react';
import TodoItem from './TodoItem';

const TodoList = React.memo(({ todos, onToggle, onDelete, onEdit }) => {
    if (todos.length === 0) {
        return <div className="py-4 text-center text-gray-500">할 일이 없습니다. 새로운 할 일을 추가해보세요!</div>;
    }

    return (
        <div className="mt-4">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    );
});

export default TodoList;
