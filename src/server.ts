import express, { Application } from "express";
import testRoutes from "./routes/testRoutes";

const app: Application = express();
const port = 3000;

app.use(express.json());

app.use("/led", testRoutes);

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
