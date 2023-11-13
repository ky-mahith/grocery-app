// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText]);
      setInputText('');
    }
  };

  return (
    <div className="App">
      <header>
        <h1>MY TA TEST</h1>
        <nav>
          <a href="https://github.com">GitHub Link to this project</a>
        </nav>
      </header>
      <div className="container">
        <InputComponent
          inputText={inputText}
          onInputChange={handleInputChange}
          onAddItem={handleAddItem}
        />
        <ListComponent items={items} />
      </div>
    </div>
  );
}

function InputComponent({ inputText, onInputChange, onAddItem }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputText}
        onChange={onInputChange}
        placeholder="Enter an item"
      />
      <button onClick={onAddItem}>Add</button>
    </div>
  );
}

function ListComponent({ items }) {
  return (
    <div className="list-container">
      <h2>Items List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
