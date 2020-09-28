const express = require('express');
const app = express();
app.get('/', (req, res) =>{
res.send("Hi hellow");
});

app.listen(8080, () => {
    console.log('listning 8080 ...');
});