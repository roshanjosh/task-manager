import React, { useState } from 'react';
import { Plus, Link, List, Grid } from 'lucide-react';

const TeamMembers = ({ members }) => {
  const [copyMessage, setCopyMessage] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://github.com/roshanjosh').then(() => {
      setCopyMessage(true);
      setTimeout(() => setCopyMessage(false), 2000); // Hide message after 2 seconds
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 mt-4 mb-8">
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          {members.slice(0, 4).map((user, index) => (
            <div
              key={index}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-900 transition-all duration-200"
            />
          ))}
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 dark:bg-purple-700 text-purple-600 dark:text-purple-200 flex items-center justify-center border-2 border-white dark:border-gray-900 transition-all duration-200">
            +2
          </button>
        </div>
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center border-gray-300 dark:border-gray-600 transition-all duration-200">
          <Plus className="w-5 h-5 text-gray-200" />
        </button>
      </div>

      <div className="flex flex-col items-center md:items-end">
        <div className="flex items-center gap-2">
          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="relative group flex items-center justify-center w-10 h-10 rounded text-purple-600 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-200"
          >
            <Link className="w-5 h-5" />
            <span className="absolute opacity-0 group-hover:opacity-100 bg-purple-200 dark:bg-purple-800 text-purple-600 dark:text-purple-300 text-xs px-2 py-1 rounded-lg top-12 transition-opacity duration-200">
              Copy Link
            </span>
          </button>

          {/* Show as List Button */}
          <button
            onClick={() => setViewMode('list')}
            className={`relative group flex items-center justify-center w-10 h-10 rounded transition-colors duration-200 ${
              viewMode === 'list' ? 'bg-purple-200 dark:bg-purple-800' : 'text-purple-600 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800'
            }`}
          >
            <List className="w-5 h-5" />
            <span className="absolute opacity-0 group-hover:opacity-100 bg-purple-200 dark:bg-purple-800 text-purple-600 dark:text-purple-300 text-xs px-2 py-1 rounded-lg top-12 transition-opacity duration-200">
              Show as List
            </span>
          </button>

          {/* Show as Grid Button */}
          <button
            onClick={() => setViewMode('grid')}
            className={`relative group flex items-center justify-center w-10 h-10 rounded transition-colors duration-200 ${
              viewMode === 'grid' ? 'bg-purple-200 dark:bg-purple-800' : 'text-purple-600 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800'
            }`}
          >
            <Grid className="w-5 h-5" />
            <span className="absolute opacity-0 group-hover:opacity-100 bg-purple-200 dark:bg-purple-800 text-purple-600 dark:text-purple-300 text-xs px-2 py-1 rounded-lg top-12 transition-opacity duration-200">
              Show as Grid
            </span>
          </button>
        </div>

        {copyMessage && (
          <span className="text-sm text-green-600 dark:text-green-400 mt-2">
            Link copied to clipboard!
          </span>
        )}
      </div>
    </div>
  );
};

export default TeamMembers;
