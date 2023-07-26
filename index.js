const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.get('/status', (req, res)=>{
    const status = {
        Status: 'Running'
     };
     console.log(req);
     res.send(status); 
});

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})