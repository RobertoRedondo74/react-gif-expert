/** @format */
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputVaule, setInputVaule] = useState('');
  const onInputChange = event => {
    setInputVaule(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (inputVaule.trim().length <= 1) return;
    //setCategories(categories => [inputVaule, ...categories]);
    onNewCategory(inputVaule.trim());
    setInputVaule('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputVaule}
        onChange={onInputChange}
      />
    </form>
  );
};
