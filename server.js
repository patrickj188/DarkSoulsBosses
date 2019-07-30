const express = require('express');
const app = express();
const PORT = process.env.PORT || 3008;
const cors = require('cors')


app.use(cors());
app.use(express.urlencoded({ extended: true }));
require("./routes/apiRoutes")(app);

app.listen(PORT);