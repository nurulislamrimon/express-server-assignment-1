const express = require('express');
const mainRoute = require('./Routes/main.routes');
const usersRouter = require('./Routes/user.routes');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/", mainRoute);
app.use("/user", usersRouter);


app.listen(port, () => console.log(`Port ${port} is running`)
)