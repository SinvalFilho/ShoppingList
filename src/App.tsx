import { useState } from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import ShoppingItems from "./components/ShoppingItems";


interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  
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

  return (
    <div id="container">
      {/* categorias */}
      <Header categories={categories} onCategoryFilter={handleCategoryFilter} />
      <div id="task-write">
        <AddItemForm onAddTodo={handleAddTodo} />
      </div>
      <ShoppingItems
        todos={todos.filter((todo) =>
          selectedCategory ? todo.category === selectedCategory : true
        )}
        onToggleTodo={handleToggleTodo}
        onRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
};

export default App;