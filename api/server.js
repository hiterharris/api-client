const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => res.send('Hello world!!'))

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`App listening on port ${port}`)
    }
});