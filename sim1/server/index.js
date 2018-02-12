require("dotenv").config();

const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const { getData } = require("./controllers/mainCtrl");
const app = express();

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(console.log);

app.use(json());
app.use(cors());
app.get("/api/getData", getData);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Now Listening on Port: ${port}`);
});
