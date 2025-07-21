import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import clientRoute from "./Routes/clientRoute.js";
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/api", clientRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is Runnign on Port ${port}`);
});
