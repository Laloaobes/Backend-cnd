const express = require('express');
const app = express();
const routes = require('./src/routes');
const port = 6001;

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));
  
routes(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});