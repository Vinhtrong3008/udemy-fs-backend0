require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const connection = require('./config/database');


const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


//config req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//config temple engine
configViewEngine(app);

//khia baos router
app.use('/',webRouters);

//test conection


// A simple SELECT query


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
