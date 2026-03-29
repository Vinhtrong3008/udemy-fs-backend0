require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const connection = require('./config/database');
const Kitten = require('./models/Kiten')

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

const cat = new Kitten({ name: 'Hoi vinh trong' });
cat.save();

//test conection
( async () => {
try {
  await connection();
  app.listen(port,hostname, () => {
  console.log(`Backend app listening on port ${port}`)
})
} catch (error) {
  console.log("Error connection DB");
  
}
})()
// A simple SELECT query



