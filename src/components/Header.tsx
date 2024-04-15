import * as React from "react";
import '../App.css';

interface HeaderProps {
  categories: string[];
  onCategoryFilter: (category: string) => void;
  onSearchChange: (search: string) => void;
  search: string;
}

const Header: React.FC<HeaderProps> = ({ categories, onCategoryFilter, onSearchChange, search }) => {
  const handleCategoryFilterChange = (category: string) => {
    onCategoryFilter(category);
  };

  return (
    <div id="title-container">
      <div id="title">
        <img src="./src/assets/shopping.svg" alt="Shopping List" />
        <h1>Shopping List</h1>
      </div>
      <div id="filters">
        <button onClick={() => handleCategoryFilterChange("")}>Todos</button>
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryFilterChange(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
