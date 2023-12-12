import app from "./app.js"
import { connectDb } from "./db.js"
import { PORT } from "./utils.js";

const port = PORT

connectDb();
app.listen( port ,()=>{
    console.log('server is running', port)
});
