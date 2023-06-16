const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hi from localhost");
})

app.listen(3000);