import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from '../../components/contexts/themeConctext';

import Header from '../../components/layout/header';
import Sidebar from '../../components/layout/sidebar';
import ProjectHeader from '../../components/project/projectHeader';
import { initialData } from '../../constants/initialData';
import TaskBoard from '../../components/tasks/taskBoard';

import { getTasks, transformTaskData } from '../../services/taskService';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { theme } = useTheme();
  const [tasks, setTasks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        const transformedTasks = transformTaskData(response.data.todos);
        setTasks(transformedTasks);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">Error loading tasks: {error}</div>;
  }

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${theme}`}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 flex-shrink-0 ${
            isCollapsed ? 'w-16 md:w-20' : 'w-64'
          }`}
        >
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </div>

        {/* Main content area */}
        <div className="flex-1 min-w-0 overflow-x-hidden">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <Header />
          </div>

          {/* Main content */}
          <main className="p-4 lg:p-6 overflow-auto h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="dark:shadow-gray-900/30">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <div className="p-6 text-gray-800 dark:text-gray-200">
                        <div className="max-w-7xl mx-auto p-6">
                          <ProjectHeader project={initialData.project} />
                          {isLoading ? (
                            <div className="flex items-center justify-center h-64">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500" />
                            </div>
                          ) : (
                            <TaskBoard taskService={tasks} />
                          )}
                        </div>
                      </div>
                    }
                  />
                  <Route
                    path="/schedule"
                    element={
                      <div className="p-6 text-gray-800 dark:text-gray-200">
                        Schedule management interface
                      </div>
                    }
                  />
                  {/* Add other routes similarly */}
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
