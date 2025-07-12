import express from "express";
import numberRoutes from "./routes/routes.js";
import mongoose from "mongoose";
import cors from "cors"; // ✅ أضفنا CORS

const app = express();

// ✅ تفعيل CORS
app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/GuardX_task1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ المسارات
app.use("/", numberRoutes);

app.listen(3000, () => {
  console.log("🚀 Server started on http://localhost:3000");
 });