express=require('express');
cors=require('cors');
/*
The package contains a middleware for the Express server, so that you can enable
 CORS (Cross-Origin Resource Sharing). CORS is
 a system, consisting of transmitting
 HTTP headers, that determines whether to block or fulfill
  requests for restricted resources on a web page from another
  domain outside the domain from which the resource originated.
The same-origin security policy forbids “cross-domain” requests by
default. CORS gives web servers cross-domain access
controls, which enable secure cross-domain data transfers
*/

mongoose=require('mongoose');
path = require('path');
bodyParser=require('body-parser');
config = require('../config/DB');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/forms', {useNewUrlParser: true}).then(
  () => {console.log('Database is connected')},
  err => {console.log('Database is not  connected'+err)}

  );


 const app=express();
 const router=express.Router();
 app.use(bodyParser.json());
 app.use(cors());
//app.use('/', router);
//AdUnit=require('../models/Profile.js');

let AdUnitSchema = new mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  }

});
let AdUnit = mongoose.model('AdUnit', AdUnitSchema);

app.post('/users/add', function(req,res) {
  console.log(req.body);
  //res.json(req.body);
  //res.send('request is sent');
  var form =new AdUnit(req.body);
  form.save(function(err){
    res.status(201);
  })

})
const server = app.listen(4000, ()=>console.log('express started running on server 4000'));
