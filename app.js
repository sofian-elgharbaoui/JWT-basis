const express = require("express");
const app = express();

const notFoundPages = require("./middeleware/fot_found.js");
const errorsHandler = require("./middeleware/errors_handler");

const authRouter = require("./routes/authRouter.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

app.use("/api/v1", authRouter);

app.use(notFoundPages);
app.use(errorsHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
