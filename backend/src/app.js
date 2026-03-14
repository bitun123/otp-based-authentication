const express = require("express");
const cookie = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
/**
 * @Routes importing
 */
const authRoutes = require("./routes/auth.routes");
const adminRoutes = require("./routes/admin.routes");
const userRoutes = require("./routes/user.routes");
const tmdbMoviesRoutes = require("./routes/tmdbMovies.routes");
const tmdbTvRoutes = require("./routes/tmdbTv.routes");
const tmdbSearchRoutes = require("./routes/tmdb.search.routes");

const app = express();

app.use(express.json());
app.use(cookie());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

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
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tmdb", tmdbMoviesRoutes);
app.use("/api/tmdb", tmdbTvRoutes);
app.use("/api/tmdb", tmdbSearchRoutes);

module.exports = app;
