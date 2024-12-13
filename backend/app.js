const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

db.sequelize.sync();

authRoutes(app);
userRoutes(app);
adminRoutes(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Ireland Travel Platform." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

