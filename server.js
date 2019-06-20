const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const port = process.env.PORT;
const fetch = require('./controllers/fetch.js');

app.use(bodyParser.json());
app.use(cors());

const db = knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'clpl_emp'
    }
  });
// const db = knex({
//     client: 'mysql',
//     connection: {
//       host : '50.62.209.51:3306',
//       user : 'lata',
//       password : 'clpl@123#',
//       database : 'clpl_emp'
//     }
//   });

/************** Simple Get Request Api************/
  
  app.get('/',(req ,res)=>{
    res.send("Its Working!!!");
  });
  
/************** Simple Get Request on /fetch/:id************/
  app.get('/fetch',(req ,res) => { fetch.handleFetch(req, res, db)});

app.listen(port || 3000, ()=>{
    if(port){
        console.log(`app is running on port = ${port}`);
    } else{
        console.log('app is running on port 3000');
    } 
});