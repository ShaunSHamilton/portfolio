import express from "express";
import cors from "cors";
import { Logger } from "logover";
import { createTransaction } from "./create-transaction.js";

const logover = new Logger({
  level: "debug",
  timestamp: "[dd/MM/YYYY hh:mm:ss]",
});

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://shaunshamilton.github.io"
      : "http://localhost:1234",
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
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
  logover.info(`Server listening on port ${PORT}`);
});
