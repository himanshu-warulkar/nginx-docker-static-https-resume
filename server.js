const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const replicaAppName = process.env.APP_NAME

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request servered by ${replicaAppName}`);    
});

app.listen(port, () => {
    console.log(` ${replicaAppName} is listening on port ${port}`);
});