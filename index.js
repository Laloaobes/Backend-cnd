const express = require('express');
const app = express();
const routes = require('./src/routes');
const port = 6001;

const cors = require('cors');
app.use(cors());
  
routes(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});