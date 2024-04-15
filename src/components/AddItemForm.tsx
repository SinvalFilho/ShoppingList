import { useState } from "react";
import QuantityInput from "./QuantityInput";
import '../App.css';
import { Check } from "@phosphor-icons/react";
import '../App.css';

interface AddItemFormProps {
  onAddTodo: (text: string, category: string, quantity: number) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Alimento");
  const [quantity, setQuantity] = useState<number>(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleAddClick = () => {
    if (inputText.trim() !== "") {
      onAddTodo(inputText, selectedCategory, quantity);
      setInputText("");
      setSelectedCategory("Alimento");
      setQuantity(1);
    }
  };

  return (
    <>
      <input
        id="input-compra"
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Adicione uma nova compra"
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="Alimento">Alimento</option>
        <option value="Limpeza">Limpeza</option>
        <option value="Petz">Petz</option>
        <option value="Automovel">Automovel</option>
        <option value="Outros">Outros</option>
      </select>
      <QuantityInput quantity={quantity} onChange={handleQuantityChange} />
      <button onClick={handleAddClick}>
        <Check size={30}/>
      </button>
    </>
  );
};

export default AddItemForm;
