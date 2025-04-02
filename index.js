const express = require('express');
const app = express();
const routes = require('./src/routes');
const { init } = require('./src/servicelocator/composer')
const port = 4000;

routes(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port }`);


});