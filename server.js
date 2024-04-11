const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const regroutes = require('./MVC/routes/regroutes');
app.use(regroutes);

app.listen(port, () => {
    console.log(`Spaceflex backend: http://localhost:${port}`);
});
