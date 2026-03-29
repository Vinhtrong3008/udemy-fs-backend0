require('dotenv').config();
const mongoose = require('mongoose')

const dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];

    
const connection = async ()=>{
// Or:
    const options = {
    dbName: process.env.DB_NAME
    }
  await mongoose.connect('mongodb://127.0.0.1:27017',options);
  const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db

}

module.exports = connection;
