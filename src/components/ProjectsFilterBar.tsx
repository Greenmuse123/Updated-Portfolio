import React from 'react';

interface ProjectsFilterBarProps {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

const ProjectsFilterBar: React.FC<ProjectsFilterBarProps> = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6 justify-center">
      <button
        className={`px-3 py-1 rounded-full border text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60  ${
          selectedTag === null
            ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-emerald-100 dark:hover:bg-emerald-900'
        }`}
        onClick={() => onSelectTag(null)}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`px-3 py-1 rounded-full border text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60  ${
            selectedTag === tag
              ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-emerald-100 dark:hover:bg-emerald-900'
          }`}
          onClick={() => onSelectTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default ProjectsFilterBar;
