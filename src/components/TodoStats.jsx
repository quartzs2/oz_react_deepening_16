import React, { useMemo } from 'react';

const TodoStats = React.memo(({ todos }) => {
    const stats = useMemo(() => {
        const total = todos.length;
        const completed = todos.filter((todo) => todo.completed).length;
        const active = total - completed;
        const percentCompleted = total === 0 ? 0 : Math.round((completed / total) * 100);
        return { total, completed, active, percentCompleted };
    }, [todos]);

    return (
        <div className="my-5 p-4 bg-gray-100 rounded">
            <h3 className="mb-2 text-lg font-semibold">통계</h3>
            <div>전체 할 일: {stats.total}개</div>
            <div>완료: {stats.completed}개</div>
            <div>미완료: {stats.active}개</div>
            <div>진행률: {stats.percentCompleted}%</div>
            <div className="mt-2.5 h-2.5 bg-gray-300 rounded">
                <div className="h-full bg-blue-500 rounded" style={{ width: `${stats.percentCompleted}%` }} />
            </div>
        </div>
    );
});

export default TodoStats;
