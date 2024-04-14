import { useState } from "react";

interface AddItemFormProps {
  onAddTodo: (text: string) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddClick = () => {
    if (inputText.trim() !== "") {
      onAddTodo(inputText);
      setInputText("");
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Adicione uma nova compra"
      />
      <button onClick={handleAddClick}>Adicionar</button>
    </>
  );
};

export default AddItemForm;
