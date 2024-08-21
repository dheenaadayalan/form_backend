import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import formRouter from "./Routers/formRouter.js";
import connectDB from "./Database/config.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Hi welcome to Forms API");
});

app.use("/api",formRouter)
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`App is running on the port:${process.env.PORT}`);
});
