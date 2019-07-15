const express = require('express');
const app = express();
const port = 3008;
const cors = require('cors')


app.use(cors());
require("./routes/apiRoutes")(app);

app.listen(port);