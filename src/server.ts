import express, { Application } from "express";
// import testRoutes from "./routes/testRoutes";
import bodyParser from "body-parser";
import routes from "./routes";

const app: Application = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Parses JSON request bodies

// Routes
app.use("/", routes);

app
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
