import React from 'react';

interface ProjectsCategoryTabsProps {
  categories: { key: string; title: string; icon: string }[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const ProjectsCategoryTabs: React.FC<ProjectsCategoryTabsProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6 justify-center">
      <button
        className={`px-4 py-2 rounded-full font-semibold text-base transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-emerald-400/60 ${
          selectedCategory === null
            ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-emerald-100 dark:hover:bg-emerald-900'
        }`}
        onClick={() => onSelectCategory(null)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.key}
          className={`px-4 py-2 rounded-full font-semibold text-base flex items-center gap-2 transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-emerald-400/60 ${
            selectedCategory === cat.key
              ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-emerald-100 dark:hover:bg-emerald-900'
          }`}
          onClick={() => onSelectCategory(cat.key)}
        >
          <span className="text-xl">{cat.icon}</span>
          {cat.title}
        </button>
      ))}
    </div>
  );
};

export default ProjectsCategoryTabs;
