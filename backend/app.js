const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Initialize an empty list to store items
const itemList = [];

// Endpoint to add an item to the list
app.post('/addItem', (req, res) => {
  const { item } = req.body;

  if (!item) {
    return res.status(400).json({ error: 'Item is required' });
  }

  itemList.push(item);
  return res.status(200).json({ message: 'Item added successfully', itemList });
});

// Endpoint to get the current list of items
app.get('/items', (req, res) => {
  return res.status(200).json({ itemList });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
