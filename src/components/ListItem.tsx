import { useState } from "react";
import * as React from "react";

interface ListItemProps {
  id: number;
  text: string;
  completed: boolean;
  category: string;
  quantity: number;
  onToggle: () => void;
  onRemove: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  text,
  completed,
  category,
  quantity,
  onToggle,
  onRemove,
}) => {
  const [reminder, setReminder] = useState<string>("");

  const handleReminderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReminder(e.target.value);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text} - {quantity} {category} {/* categoria */}
      </span>
      {/* Lembrete */}
      <input
        type="text"
        value={reminder}
        onChange={handleReminderChange}
        placeholder="Adicione um lembrete"
      />
      {/* Remoção */}
      <button onClick={() => onRemove(id)}>Remover</button>
    </li>
  );
};

export default ListItem;