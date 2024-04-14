import * as React from "react";
import ListItem from "./ListItem";


interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string;
  quantity: number;
}

interface ShoppingItemsProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
}

const ShoppingItems: React.FC<ShoppingItemsProps> = ({
  todos,
  onToggleTodo,
  onRemoveTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          category={todo.category}
          quantity={todo.quantity}
          onToggle={() => onToggleTodo(todo.id)}
          onRemove={() => onRemoveTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default ShoppingItems;
