import Express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = Express();

mongoose.connect('mongodb://localhost/api');

app.use(Express.json());

app.use(routes);

app.listen(3000, () => {
  console.log('SERVER START IN PORT 3000');
});