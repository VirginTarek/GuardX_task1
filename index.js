import express from "express";
import numberRoutes from "./routes/routes.js";
const app = express();
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/GuardX_task1', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
app.use(express.json()); 



app.use('/routes', numberRoutes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});