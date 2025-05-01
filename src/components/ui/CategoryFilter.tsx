import React from 'react';
import { Watch as WatchIcon, User, UserRound, ActivitySquare } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'all', name: 'جميع الساعات', icon: WatchIcon },
    { id: 'men', name: 'ساعات رجالية', icon: User },
    { id: 'women', name: 'ساعات نسائية', icon: UserRound },
    { id: 'sport', name: 'ساعات رياضية', icon: ActivitySquare },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-8 mt-4 dir-rtl">
      {categories.map(category => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon size={20} />
            <span className="font-medium">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;