import React from 'react';

export function ProjectFilter({
  activeFilter,
  onFilterChange,
  webProjectCount,
  appProjectCount
}) {
  return (
    <div className="flex justify-center mb-8">
      <div 
        className="flex items-center cursor-pointer"
        onClick={() => onFilterChange(activeFilter === 'web' ? 'app' : 'web')}
      >
        <div className={`
          w-16 h-8 bg-gray-200 rounded-full p-1 flex items-center transition-all duration-300
          ${activeFilter === 'app' ? 'bg-primary' : 'bg-gray-200'}
        `}>
          <div className={`
            w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${activeFilter === 'app' ? 'translate-x-8' : 'translate-x-0'}
          `}/>
        </div>
        <span className="ml-4 text-gray-700">
          {activeFilter === 'web' ? `Web (${webProjectCount})` : `App (${appProjectCount})`}
        </span>
      </div>
    </div>
  );
}