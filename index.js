require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const ecommerceRoute = require("./routes/ecommerce");
require('./models/index');

app.use(express.json);
app.use(cors());
app.use('/ecommerce', ecommerceRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
