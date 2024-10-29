import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Filter } from 'lucide-react';

const TaskFilters = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg transition-colors duration-200">
      <div className="flex items-center gap-4 rounded-lg bg-gray-100 dark:bg-gray-700 p-2 transition-colors duration-200">
        <button className="px-4 py-2 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200">
          <Filter className="w-4 h-4" />
          <span>{t('Filter & Sort')}</span>
        </button>
      </div>
      <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-800 flex items-center gap-2 transition-colors duration-200">
        <Plus className="w-4 h-4" />
        <span>{t('New Task')}</span>
      </button>
    </div>
  );
};

export default TaskFilters;
