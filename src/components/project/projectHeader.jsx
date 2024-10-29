import React from 'react';
import { useTranslation } from 'react-i18next';
import { Share2, MoreVertical, Plus } from 'lucide-react';
import TeamMembers from './teamMembers';
import TaskFilters from '../tasks/taskFilters';

const ProjectHeader = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-8 p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{project.workspace}</span>
            <span>›</span>
            <span>{project.category}</span>
            <span>›</span>
            <span className="text-gray-900 dark:text-white">{project.name}</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mt-2">
            {project.title}
          </h1>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <Share2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>

      <TeamMembers members={project.team} />

      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-colors duration-200">
        <div className="flex flex-col md:flex-row justify-between dark:text-gray-400 items-start md:items-center mb-2 pt-2">
          <div className="flex flex-wrap gap-2 items-center text-sm">
            <button className="text-purple-400 border-b-2 border-purple-500 px-4 py-2 transition-colors duration-200">
              {t('All Tasks')} <span className="ml-1">30</span>
            </button>
            <button className="text-gray-500 hover:text-purple-400 px-4 py-2 transition-colors duration-200">
              {t('To do')} <span className="ml-1">15</span>
            </button>
            <button className="text-gray-500 hover:text-purple-400 px-4 py-2 transition-colors duration-200">
              {t('In Progress')} <span className="ml-1">-</span>
            </button>
            <button className="text-gray-500 hover:text-purple-400 px-4 py-2 transition-colors duration-200">
              {t('Completed')} <span className="ml-1">15</span>
            </button>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0">
            <TaskFilters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
