import React from 'react';

interface ProjectsSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const ProjectsSearchBar: React.FC<ProjectsSearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search projects by name, description, or tech..."
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 shadow-sm text-base"
        aria-label="Search projects"
      />
    </div>
  );
};

export default ProjectsSearchBar;
