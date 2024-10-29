import React from 'react';
import TaskCard from './taskCards';

const TaskColumn = ({ title, tasks, id, onTaskMove }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{tasks.length}</span>
      </div>
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onMove={(destinationColumn) => onTaskMove(task.id, id, destinationColumn)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;