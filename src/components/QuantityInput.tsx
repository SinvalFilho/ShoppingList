import * as React from "react";
import '../App.css';

interface QuantityInputProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ quantity, onChange }) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    onChange(newQuantity);
  };

  return (
    <input
      id="quantity-input"
      type="number"
      value={quantity}
      onChange={handleQuantityChange}
      min={1}
      step={1}
    />
  );
};

export default QuantityInput;