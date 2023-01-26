require("./db/connection");

const express = require("express");
const userRouter = require("./user/userRoutes");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use(userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//app.listen starts up express and tells it which port to
//listen in on.Also you can run a start up function which
//in this case just displays the message listening on port 5001
