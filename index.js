const express = require('express');
const app = express()
const port = 3100;




app.get('/', (req, res) => res.sendFile('/home/ec2-user/node-demo/start.html'));




app.listen(port, () => console.log(`Example app listening on port ${port}!`))