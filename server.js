const express = require('express');
const app = express();
const PORT = process.env.PORT || 3008;
const cors = require('cors')


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + './app/public'));


require("./app/routes/apiRoutes")(app);

app.listen(PORT);