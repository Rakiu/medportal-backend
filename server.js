import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config();
connectDB();


const app = express();
app.use(express.json());


app.use("/api/admin/auth", authRoutes);
app.use("/api/admin/dashboard", dashboardRoutes);
app.use("/api/admin/doctors", doctorRoutes);
app.use("/api/admin/patients", patientRoutes);
app.use("/api/admin/subscriptions", subscriptionRoutes);
app.use("/api/admin/settings", settingsRoutes);


app.listen(5000, () => console.log("Admin Backend running"));