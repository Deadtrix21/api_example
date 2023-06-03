const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

const mainRoutes = require("./routes/MainRoutes")

app.use(mainRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});