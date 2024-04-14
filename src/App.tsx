import { useState } from "react";
import "../src/App.css";
import Search from "./components/Search";
import { Check } from "@phosphor-icons/react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: inputText.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="container">
      <div id="title-container">
        <div id="title">
          <img src="./src/assets/shopping.svg" alt="/src/assets/shopping.svg" />
          <h1>Shopping List</h1>
        </div>
        <Search search={search} setSearch={setSearch} />
      </div>

      <div id="task-write">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Adicione uma nova compra"
        />

        <button onClick={handleAddTodo}>
          <Check size={32} />
        </button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              id="input-tasks"
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through"  : "none",
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
