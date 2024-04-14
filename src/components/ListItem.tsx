import { useState } from "react";
import * as React from "react";

interface ListItemProps {
    id: number;
    text: string;
    completed: boolean;
    onToggle: () => void;
    onRemove: (id: number) => void;
  }
  
  const ListItem: React.FC<ListItemProps> = ({
    id,
    text,
    completed,
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
          {text}
        </span>
        {/*lembrete */}
        <input
          type="text"
          value={reminder}
          onChange={handleReminderChange}
          placeholder="Adicione um lembrete"
        />
        {/* remoção */}
        <button onClick={() => onRemove(id)}>Remover</button>
      </li>
    );
  };
  
  export default ListItem;