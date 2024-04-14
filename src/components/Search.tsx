import { ChangeEvent } from "react";
import '../App.css';
import { MagnifyingGlass } from "@phosphor-icons/react";

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <h4>Busca</h4>
      <MagnifyingGlass size={18}/>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Digite a sua procura"
      />
    </div>
  );
};

export default Search;
