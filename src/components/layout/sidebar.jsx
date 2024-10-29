import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, MessageSquare, FileText, Settings, User, ArrowLeft } from 'lucide-react';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Dashboard');
  
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: FileText, label: 'Documents', path: '/documents' },
  ];

  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-900 transition-all duration-300 z-20 
      ${isCollapsed ? 'w-16 md:w-20' : 'w-64'} md:relative border-r border-gray-200 dark:border-gray-700`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute -right-10 top-4 bg-white dark:bg-gray-900 p-2 rounded-full 
        shadow-lg transform transition-transform hover:bg-gray-100 dark:hover:bg-gray-800
        ${isCollapsed ? 'rotate-180' : ''}`}
      >
        <ArrowLeft className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </button>
      
      <div className="p-4 flex flex-col items-center">
        <Link to="/" className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-purple-600 dark:bg-purple-500 rounded-full" />
          {!isCollapsed && (
            <span className="font-semibold text-gray-800 dark:text-white">Project Hub</span>
          )}
        </Link>
        
        <nav className="flex flex-col justify-between h-[75vh] w-full">
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => handleItemClick(item.label)}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 relative group
                  ${location.pathname === item.path
                    ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }
                  ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.label : ''}
              >
                <item.icon className={`${isCollapsed ? 'w-7 h-7 md:w-8 md:h-8' : 'w-5 h-5'}`} />
                {!isCollapsed && <span>{item.label}</span>}
                {isCollapsed && (
                  <span className="absolute left-full ml-2 bg-gray-900 dark:bg-gray-800 text-white px-2 py-1 
                    rounded text-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Team Members Section */}
          <div className="flex flex-col items-center mt-8 mb-4 ">
            <h3 className={`text-gray-600 dark:text-gray-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>
              Team
            </h3>
            <div className="flex flex-col items-center gap-4 mt-4">
              {['/path/to/avatar1.jpg', '/path/to/avatar2.jpg', '/path/to/avatar3.jpg'].map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt={`Team Member ${idx + 1}`}
                  className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700"
                  title={`Team Member ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          
          <div className="space-y-1">
            <Link
              to="/settings"
              onClick={() => handleItemClick('Settings')}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 group
                ${location.pathname === '/settings'
                  ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }
                ${isCollapsed ? 'justify-center' : ''}`}
              title={isCollapsed ? 'Settings' : ''}
            >
              <Settings className={`${isCollapsed ? 'w-7 h-7 md:w-8 md:h-8' : 'w-5 h-5'}`} />
              {!isCollapsed && <span>Settings</span>}
              {isCollapsed && (
                <span className="absolute left-full ml-2 bg-gray-900 dark:bg-gray-800 text-white px-2 py-1 
                  rounded text-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
                  Settings
                </span>
              )}
            </Link>
            
            <Link
              to="/profile"
              onClick={() => handleItemClick('Profile')}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 group
                ${location.pathname === '/profile'
                  ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }
                ${isCollapsed ? 'justify-center' : ''}`}
              title={isCollapsed ? 'Profile' : ''}
            >
              <User className={`${isCollapsed ? 'w-7 h-7 md:w-8 md:h-8' : 'w-5 h-5'}`} />
              {!isCollapsed && <span>Profile</span>}
              {isCollapsed && (
                <span className="absolute left-full ml-2 bg-gray-900 dark:bg-gray-800 text-white px-2 py-1 
                  rounded text-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
                  Profile
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;