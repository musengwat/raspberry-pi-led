const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const { testLEDs } = require("./controllers/ledController");

testLEDs();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Parses JSON request bodies

// Routes
app.use("/", routes);

app
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
