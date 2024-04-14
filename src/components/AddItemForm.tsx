import { useState } from "react";

interface AddItemFormProps {
  onAddTodo: (text: string, category: string) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState<string>("");
  const [category, setCategory] = useState<string>("Alimento");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleAddClick = () => {
    if (inputText.trim() !== "") {
      onAddTodo(inputText, category);
      setInputText("");
      setCategory("Alimento");
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
      <select value={category} onChange={handleCategoryChange}>
        <option value="Alimento">Alimento</option>
        <option value="Limpeza">Limpeza</option>
        <option value="Petz">Petz</option>
        <option value="Automovel">Automovel</option>
        <option value="Outros">Outros</option>
      </select>
      <button onClick={handleAddClick}>Adicionar</button>
    </>
  );
};
export default AddItemForm;
