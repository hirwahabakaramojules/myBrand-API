import express , {urlencoded} from "express";
import home from "./routes/home";
// constants
const app = express();
const port = process.env.PORT || 5500;
// middlewares
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use("/", home);

app.listen(port, console.log(`app started on port ${port}`));

export default app;