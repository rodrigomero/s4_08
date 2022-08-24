import express from "express";
import routes from "./routes/routes";
import "reflect-metadata";

const app = express();

app.use(express.json());

app.use("/users", routes);

app.listen(3000, () => {
  console.log("server is running");
});
