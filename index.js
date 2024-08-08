#!/usr/bin/env node

const express = require('express');
const app = express();
const PORT = 3000;

app.get('*', (req, res) => {
  res.json(req.headers);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
