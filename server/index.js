const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/listing/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, () => {
  console.log(`Proxy server running at: http://localhost:${port}`);
});