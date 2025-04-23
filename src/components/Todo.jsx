import { useCallback, useMemo, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import TodoStats from './TodoStats';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const generateId = useCallback(() => Math.floor(Math.random() * 10000), []);

    const handleAdd = useCallback(
        (text) => {
            const newTodo = {
                id: generateId(),
                text,
                completed: false,
                createdAt: new Date(),
            };

            setTodos((prevTodos) => [...prevTodos, newTodo]);
        },
        [generateId],
    );

    const handleToggle = useCallback((id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        );
    }, []);

    const handleDelete = useCallback((id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }, []);

    const handleEdit = useCallback((id, newText) => {
        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
    }, []);

    const handleFilterChange = useCallback((newFilter) => {
        setFilter(newFilter);
    }, []);

    const filteredTodos = useMemo(() => {
        switch (filter) {
            case 'active':
                return todos.filter((todo) => !todo.completed);
            case 'completed':
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    }, [filter, todos]);

    return (
        <div className="max-w-xl mx-auto p-5">
            <h1 className="text-2xl font-bold text-center mb-5">할 일 관리 앱</h1>
            <TodoForm onAdd={handleAdd} />
            <TodoFilter filter={filter} onFilterChange={handleFilterChange} />
            <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} />
            <TodoStats todos={todos} />
        </div>
    );
};

export default Todo;
