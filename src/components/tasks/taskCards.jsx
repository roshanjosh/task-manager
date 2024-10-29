import React from 'react';
import { MoreVertical, MessageSquare } from 'lucide-react';

const TaskCard = ({ task, onMove }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('taskId', task.id);
    e.dataTransfer.setData('sourceColumn', task.status);
  };

    return (
      <div
        draggable
        onDragStart={handleDragStart}
        className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm cursor-move"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-gray-900 dark:text-white">
            {task.title}
          </h3>
          <button className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <MoreVertical className="w-4 h-4 text-gray-500" />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">{task.category}</p>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {task.assignees.map((assignee, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-gray-600 dark:text-gray-300"
              >
                {assignee}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm">0</span>
          </div>
        </div>
      </div>
    );
  };

  export default TaskCard;