const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.get('/', (req, res) => {
//   res.send('Server says hello!');
// });


app.listen(3000, () => {
  console.log('connected to server at 3000');
});