const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(routes);


app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});


