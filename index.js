const express = require('express');
const app = express()
const port = 3000;




app.get('/', (req, res) => res.sendFile('/home/ec2-user/node-demo/start.html'));


// app.get('/', (req, res) => res.sendFile('/Users/danielSauthier/Desktop/sideProjects/node-demo/start.html'));

app.use(express.static('/'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))