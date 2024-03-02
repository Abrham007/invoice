import express from "express";
import cors from "cors";
import invoiceRoute from "./Routes/invoiceRoute.js";
import config from "./config.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", invoiceRoute);

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`)
);
