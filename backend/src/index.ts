import express from "express";
import { middleware } from "./middleware.js";

const app = express();
const port = process.env.PORT ?? "3001";

app.get("/", middleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});