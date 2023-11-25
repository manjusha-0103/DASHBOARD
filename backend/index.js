const express = require("express")
const bodyParser = require('body-parser');
const connectDB = require("./config/db")
const cors = require('cors');

// const dotenv = require('dotenv')
// dotenv.config({});

//console.log(process.env.PORT)
const port =  5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/users',require('./routes/useroutes'))

connectDB();
app.listen(port, ()=>{
    console.log(`servere started on port ${port}`)
})









