const express = require('express')
const app = express()

let data = {
    type: 'SUCCESS', 
    data: {
        items: ['Lorem Ipsum']
    }
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send(JSON.stringify(data)));
app.listen(3000, () => console.log('Example app listening on port 3000!'))