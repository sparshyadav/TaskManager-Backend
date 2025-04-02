require("dotenv").config();
const express=require("express");
const cors=require("cors");
const path=require("path");
const connectDB = require("./config/db");
const PORT=process.env.PORT || 50000;

const authRoutes=require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes");
const taskRoutes=require("./routes/taskRoutes");
const reportRoutes=require("./routes/reportRoutes");

const app=express();

app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
);

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/reports", reportRoutes);

app.listen(PORT, ()=>console.log(`Server Running on PORT: ${PORT}`));