const express = require('express');
//importare router
const postsRouter = require('./routers/posts');

const app = express();

const port = 3000
app.use(express.json());

app.use('/', postsRouter);

app.listen(port, ()=>{
    console.log('http://localhost:3000')
})