import { useState } from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import ShoppingItems from "./components/ShoppingItems";
import Search from "./components/Search";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const categories: string[] = ["Alimento", "Limpeza", "Petz", "Automovel", "Outros"];

  const handleAddTodo = (text: string, category: string) => {
    if (text.trim() !== "") {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: text.trim(),
        completed: false,
        category: category,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (newSearch: string) => {
    setSearch(newSearch);
  };

  return (
    <div id="container">
      <Header
        categories={categories}
        onCategoryFilter={handleCategoryFilter}
        onSearchChange={handleSearchChange}
        search={search}
      />
      <Search search={search} setSearch={handleSearchChange} />
      <div id="task-write">
        <AddItemForm onAddTodo={handleAddTodo} />
      </div>
      <ShoppingItems
        todos={todos.filter((todo) =>
          todo.text.toLowerCase().includes(search.toLowerCase()) &&
          (selectedCategory ? todo.category === selectedCategory : true)
        )}
        onToggleTodo={handleToggleTodo}
        onRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
};

export default App;
