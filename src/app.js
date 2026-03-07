const express = require("express");
const cookie = require("cookie-parser");
/**
 * @Routes importing
 */
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(cookie())
/**
 * @Routes using
 */
app.use("/api/auth", userRoutes);

module.exports = app;
