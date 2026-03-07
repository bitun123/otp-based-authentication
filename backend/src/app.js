const express = require("express");
const cookie = require("cookie-parser");
const session = require("express-session");
/**
 * @Routes importing
 */
const userRoutes = require("./routes/user.routes");
const adminRoutes = require("./routes/admin.routes");



const app = express();

app.use(express.json());
app.use(cookie());

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
  }),
);
/**
 * @Routes using
 */
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);
module.exports = app;
