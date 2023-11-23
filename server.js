const express = require('express');
//importare router
const postsRouter = require('./routers/posts');

const app = express();

app.use(express.json());

app.use('/', postsRouter);

app.listen(3000, ()=>{
    console.log('http://localhost:3000')
})