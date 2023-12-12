//imports-----------------------------------------------------
import express from "express";
import router from "./routes/index.js";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors"

import { engine } from "express-handlebars";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//settings-----------------------------------------------------
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  engine({
    layoutDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayaout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middlewares--------------------------------------------------

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//routes-------------------------------------------------------

app.use(router);
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

//static files-------------------------------------------------
app.use(express.static(path.join(__dirname, "public")));

export default app;
