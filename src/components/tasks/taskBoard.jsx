import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import TaskColumn from './taskColumn';
// import TaskFilters from './taskFilters';

import { updateTask } from '../../services/taskService';

const TaskBoard = ({ taskService }) => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState(taskService);

  const handleTaskMove = async (taskId, sourceColumn, destinationColumn) => {
    try {
      const updatedTasks = { ...tasks };
      const taskIndex = updatedTasks[sourceColumn].findIndex(t => t.id === taskId);
      const [task] = updatedTasks[sourceColumn].splice(taskIndex, 1);
      
      task.status = destinationColumn;
      updatedTasks[destinationColumn].push(task);
      
      setTasks(updatedTasks);
      
      await updateTask(taskId, {
        completed: destinationColumn === 'completed',
        todo: task.title,
      });
    } catch (error) {
      console.error('Error updating task:', error);
      // Revert changes if update fails
      setTasks(taskService);
    }
  };

  return (
    <div className="h-full">
      {/* <TaskFilters /> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <TaskColumn
          title={t('task.todo')}
          tasks={tasks.todo}
          id="todo"
          onTaskMove={handleTaskMove}
        />
        <TaskColumn
          title={t('task.inProgress')}
          tasks={tasks.inProgress}
          id="inProgress"
          onTaskMove={handleTaskMove}
        />
        <TaskColumn
          title={t('task.completed')}
          tasks={tasks.completed}
          id="completed"
          onTaskMove={handleTaskMove}
        />
      </div>
    </div>
  );
};

export default TaskBoard;