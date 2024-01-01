import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const[inputText, setInputText] = useState('');
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        if(inputText.trim() !== '') {
            addTodo(inputText);
            setInputText('')
        }
    };
  return (
    <form onSubmit={handleSumbit} className="mb-4 text-left">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Add a new toda..."
        className="w-full rounded-md p-2 border text-black"
      />
      <button
        type="submit"
        className="w-full mt-2 py-2 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Add ToDo
      </button>
    </form>
  );
}

export default TodoForm;
