import express from "express";
import "express-async-errors";
import cors from "cors";
import "./database/connection";
import routes from "./routes";
import path from "path";
import errorHandler from "./errors/handle";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorHandler);

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.listen(3333, () => console.log("Server is running!"));
