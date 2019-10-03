const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");
const { apiURL, apiKey } = require("../config");

const app = express();
const port = 3001;

app.use(cors());
app.use(json());

app.get(`/api/movies`, (req, res, next) => {
  axios.get(`${apiURL}/movie/popular${apiKey}`).then(response => {
    res.status(200).json(response.data);
  });
});

app.listen(port, () => {
  console.log(`Server is live on port: ${port}`);
});
