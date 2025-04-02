const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./src/routes');
const { init } = require('./src/servicelocator/composer')
const port = 4000;

routes(app);


app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }
));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port }`);


});