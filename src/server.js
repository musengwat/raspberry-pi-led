const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const { initializeLEDs } = require("../controllers/ledController");

const app = express();
const port = 3000;

const ledStartup = async () => {
  const { ws281x } = await initializeLEDs();
};

// Apply the middleware globally

// Middleware
app.use(bodyParser.json()); // Parses JSON request bodies

// Routes
app.use("/", await routes);

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
