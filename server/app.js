const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const skillRoutes = require("./routes/skills");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/skills", skillRoutes);

app.get("/", (req, res) => {
  res.send("backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});
