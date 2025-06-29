
import React from 'react';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'all', name: 'All Products', emoji: '🛍️' },
  { id: 'fruits', name: 'Fruits & Vegetables', emoji: '🥕' },
  { id: 'dairy', name: 'Dairy & Eggs', emoji: '🥛' },
  { id: 'bakery', name: 'Bakery', emoji: '🍞' },
  { id: 'meat', name: 'Meat & Seafood', emoji: '🥩' },
  { id: 'pantry', name: 'Pantry', emoji: '🥫' },
  { id: 'frozen', name: 'Frozen', emoji: '🧊' },
  { id: 'beverages', name: 'Beverages', emoji: '🥤' },
];

interface CategoryNavProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              onClick={() => onCategorySelect(category.id)}
              className="flex items-center space-x-2 whitespace-nowrap min-w-fit"
            >
              <span>{category.emoji}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
