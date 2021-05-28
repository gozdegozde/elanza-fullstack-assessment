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

app.post("/requests", async (req, res, next) => {
  const { careType, startDate, endDate, clientName, extraInfo } =
    req.body;
  try {
    if (!careType || !clientName) {
      res.status(400).send("Must provide care type and client name");
    } else {
      const request = await Request.create({
        careType,
        startDate,
        endDate,
        clientName,
        extraInfo,
      });
      res.json(request);
    }
  } catch (e) {
    next(e);
  }
});


app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));