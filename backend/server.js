require("dotenv").config();
const express = require("express");

const cors = require("cors");

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");

const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");
const dbConnect = require("./config/db");

const app = express();

const URL = process.env.FRONTEND_URL;

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: [URL], //esto es para publicar y vincular backend y frontend
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Routes Middlewares
app.use("/api/users", errorHandler, userRoute);
app.use("/api/products", errorHandler, productRoute);

//Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

//connect to DB and start server
const port = process.env.PORT || 5000;
dbConnect();

// app.listen(port, () => {
//   console.log(`Server Running on port ${port}`);
// });
