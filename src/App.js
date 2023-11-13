// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddItem = async () => {
    try {
      if (inputText.trim() !== '') {
        const response = await axios.post('http://localhost:3001/addItem', {
          item: inputText,
        });
        console.log(response.data);
        setInputText('');
        fetchItems();
      }
    } catch (err) {
      setError('An error occurred while adding the item.');
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3001/items');
      setItems(response.data.itemList);
      setError('');
    } catch (err) {
      setError('An error occurred while fetching items.');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <a href="/">MY TA TEST</a>
        </nav>
        <h1>
          <a href="https://github.com/ky-mahith/ta-test">GitHub</a>
        </h1>
      </header>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter an item"
          />
          <button onClick={handleAddItem}>Add</button>
        </div>
        <div className="list-container">
          <h2>Items List</h2>
          {error && <p className="error">{error}</p>}
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
