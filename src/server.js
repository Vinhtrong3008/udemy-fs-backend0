require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEndine')
const webRouters = require('./routes/web')


console.log("check env", process.env);

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config temple engine
configViewEngine(app);

//khia baos router
app.use('/test',webRouters);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
