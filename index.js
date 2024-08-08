#!/usr/bin/env node

const express = require('express');
const app = express();

// Define a route that returns the request headers
app.get('/', (req, res) => {
  res.json(req.headers);
});

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
