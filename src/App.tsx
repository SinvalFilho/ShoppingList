// App.tsx

import { useState } from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import ShoppingItems from "./components/ShoppingItems";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    if (text.trim() !== "") {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: text.trim(),
        completed: false,
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
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div id="container">
      <Header />
      <div id="task-write">
        <AddItemForm onAddTodo={handleAddTodo} />
      </div>
      <ShoppingItems
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
};

export default App;
