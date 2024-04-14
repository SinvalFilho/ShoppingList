import * as React from "react";
import Search from "./Search";

const Header: React.FC = () => {
  return (
    <div id="title-container">
      <div id="title">
        <img src="./src/assets/shopping.svg" alt="/src/assets/shopping.svg" />
        <h1>Shopping List - Sinval</h1>
      </div>
      <Search search="" setSearch={() => {}} /> {}
    </div>
  );
};

export default Header;