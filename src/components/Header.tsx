import * as React from "react";
import Search from "./Search";

interface HeaderProps {
  categories: string[];
  onCategoryFilter: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ categories, onCategoryFilter }) => {
  const handleCategoryFilterChange = (category: string) => {
    onCategoryFilter(category);
  };

  return (
    <div id="title-container">
      <div id="title">
        <h1>Shopping List</h1>
      </div>
      <div id="filters">
        <button onClick={() => handleCategoryFilterChange("")}>Todas</button>
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryFilterChange(category)}>
            {category}
          </button>
        ))}
      </div>
      <Search search="" setSearch={() => {}} /> {}
    </div>
  );
};

export default Header;