const express = require('express');
const app = express();
const Request = require("./models").request;
const PORT = process.env.PORT || 8080;

app.get("/requests", async (req, res, next) => {
  try {
    const requests = await Request.findAll();
    res.status(200).send(requests);
  } catch (error) {
    next(error.message);
  }
});

// this is the in-memory database ;)
let counter = 0;

app.get('/api/data', function (req, res) {
  counter++;
  return res.json({name: 'sunshine', counter: counter});
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));