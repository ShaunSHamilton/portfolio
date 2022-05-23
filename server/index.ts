import express from "express";
import logover, { info } from "logover";
import { createTransaction } from "./create-transaction.js";

logover({
  level: "debug",
  timestamp: "[dd/MM/YYYY hh:mm:ss]",
});

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.post("/create-transaction", (req, res) => {
  createTransaction(req, res);
});

// Handle non-existent routes
app.use((_req, res) => {
  res.status(404).send("Route not found");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  info(`Server listening on port ${PORT}`);
});
