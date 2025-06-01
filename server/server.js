import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import connectCloudinary from "./configs/cloudinary.js";
const port = process.env.PORT || 8000;
const app = express();
const allowedOrigins = [process.env.CLIENT_URL];
// Middlewares
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(cookieParser());

// DB connection
connectDB();
connectCloudinary();

// Routes
app.use("/api/auth", authRouter);
app.use("/api/", listingRouter);

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});
app.listen(port, () => {
  console.log("Server running on PORT: ", port);
});
