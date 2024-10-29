// src/components/common/Pagination.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  tasksPerPage, 
  totalTasks, 
  onPageChange 
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  const displayPages = () => {
    if (totalPages <= 5) return pages;
    
    if (currentPage <= 3) return [...pages.slice(0, 5), '...', totalPages];
    
    if (currentPage >= totalPages - 2) {
      return [1, '...', ...pages.slice(totalPages - 5)];
    }
    
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-4">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Showing {Math.min((currentPage - 1) * tasksPerPage + 1, totalTasks)} to{' '}
        {Math.min(currentPage * tasksPerPage, totalTasks)} of {totalTasks} tasks
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-50 
                   disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <ChevronLeft className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
        
        <div className="flex items-center gap-1">
          {displayPages().map((page, index) => (
            <React.Fragment key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-gray-500 dark:text-gray-400">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => onPageChange(page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium
                    ${currentPage === page
                      ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-50 
                   disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;