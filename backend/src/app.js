import express from "express";
import cors from "cors";
import fighterRoutes from "./routes/fighterRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/fighters", fighterRoutes);

export default app;