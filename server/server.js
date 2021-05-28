const express = require('express');
const app = express();
const Request = require("./models").request;
const PORT = process.env.PORT || 8080;
const cors = require("cors");
app.use(cors());
app.use(express.json());
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
app.get("/requests/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const request = await Request.findByPk(id);
    if (!request) {
      res.status(404).send("request not found");
    } else {
      res.send(request);
    }
  } catch (e) {
    next(e);
  }
});

app.put("/requests/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const requestToUpdate = await Request.findByPk(id);
    if (!requestToUpdate) {
      res.status(404).send("request not found");
    } else {
      const updatedRequest = await requestToUpdate.update({
        status: !requestToUpdate.status,
      });
      res.json(updatedRequest);
    }
  } catch (e) {
    next(e);
  }
});



app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));