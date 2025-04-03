const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./src/routes');
const { init } = require('./src/servicelocator/composer')
const port = 6000;

routes(app);


app.use(cors());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port }`);


});