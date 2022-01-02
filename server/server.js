const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect to db
connectDB();

// init middleware
app.use(express/json({ extented: false }));

// initial endpoint
app.get("/", (req, res) => res.send("API Online"));

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/todo", require("./routes/api/todo"));

const PORT = porcess.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));

