const express = require('express');
const app = express();
//require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req body

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
