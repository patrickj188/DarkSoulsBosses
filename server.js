const express = require('express');
const app = express();
const PORT = process.env.PORT || 3008;
const cors = require('cors')


app.use(cors());
require("./routes/apiRoutes")(app);

app.listen(PORT);