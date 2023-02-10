const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connect = require("./connect");
const cors = require("cors");
const route = require("./routes/route");

dotenv.config();
connect(process.env.MONGO_URI);

app.use(express.json());
app.use(cors());
app.use("/api/v1", route);

const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => { console.log(`Server running at port ${PORT}.`)});