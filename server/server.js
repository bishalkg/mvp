const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});


app.listen(9000, () => {
  console.log('connected to server at 9000');
});