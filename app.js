const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connect = require("./connect");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes/route");

// Configuiring environment variables
dotenv.config();
// Connecting to database
connect(process.env.MONGO_URI);

// Using middlewares
app.use(express.json());
app.use(cors({ origin:'http://localhost:3000', credentials: true }));
app.use(cookieParser());
app.use("/api/v1", routes);

//Starting server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}.`);
});
