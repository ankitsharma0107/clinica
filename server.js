const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");

const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const home = require("./routes/index");
const list = require("./routes/list/list");
const register = require("./routes/register/register");
const stock = require("./routes/stocks/stock");
const details = require("./routes/details/details");
const customer = require("./routes/customers/customer");

app.use(home);
app.use("/list", list);
app.use("/register", register);
app.use("/stocks", stock);
app.use(details);
app.use("/customer", customer);

app.listen(PORT, () => {
  console.log(`Listining on ${PORT}`);
});
