import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;
const HOST_URL = process.env.HOST_URL;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is live @ ${HOST_URL}`));
